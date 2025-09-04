const User = require('../models/user.model');
const httpStatusText = require('../constants/httpStatusText');
const bcrypt = require('bcryptjs');
const generateJWT = require("../utils/generateJWT");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL, pass: process.env.PASS }
});

// REGISTER
const register = async (req, res) => {
    try {
        const { fullName, email, password, role, sendEmailsAgreement } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ fullName, email, password: hashedPassword, role, sendEmailsAgreement });

        // generate verification code
        const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
        user.verificationCode = verificationCode;
        user.verificationCodeExpires = Date.now() + 10 * 60 * 1000; // 10 mins

        await user.save();

        // send email
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: user.email,
            subject: "Verify Your Email",
            text: `Your verification code is ${verificationCode}`,
            html: `<p>Hello ${user.fullName},</p><p>Your verification code is <b>${verificationCode}</b></p>`
        });

        res.status(201).json({
            status: httpStatusText.SUCCESS,
            message: "User registered. Verification code sent to email."
        });
    } catch (err) {
        res.status(500).json({ status: httpStatusText.ERROR, message: err.message });
    }
};

// VERIFY EMAIL
const verifyEmailCode = async (req, res) => {
    try {
        const { email, code } = req.body;
        if (!email || !code) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'Email and code required' });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ status: httpStatusText.FAIL, message: 'User not found' });

        if (user.verified) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'User already verified' });
        }

        if (user.verificationCode !== code || user.verificationCodeExpires < Date.now()) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'Invalid or expired code' });
        }

        user.verified = true;
        user.verificationCode = undefined;
        user.verificationCodeExpires = undefined;
        await user.save();

        res.json({ status: httpStatusText.SUCCESS, message: "Email verified successfully" });
    } catch (err) {
        res.status(500).json({ status: httpStatusText.ERROR, message: err.message });
    }
};

// LOGIN
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ status: httpStatusText.FAIL, message: 'User not found' });

        if (!user.verified) {
            return res.status(403).json({ status: httpStatusText.FAIL, message: 'Please verify your email before logging in' });
        }

        const matched = await bcrypt.compare(password, user.password);
        if (!matched) return res.status(401).json({ status: httpStatusText.FAIL, message: 'Wrong password' });

        const token = await generateJWT({ email: user.email, id: user._id, role: user.role });

        const userData = {
            fullName: user.fullName,
            email: user.email,
            role: user.role
        };

        res.json({
            status: httpStatusText.SUCCESS,
            token: token,
            user: userData
        });
    } catch (err) {
        res.status(500).json({ status: httpStatusText.ERROR, message: err.message });
    }
};

module.exports = {
    register,
    verifyEmailCode,
    login
};
