const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require('path');
const httpStatusText = require('../constants/httpStatusText');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

const email = process.env.EMAIL;
const pass = process.env.PASS;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: pass
    }
});

// SEND RESET CODE
const sendPasswordResetEmail = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'Email is required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: httpStatusText.FAIL, message: 'User not found' });
        }

        const resetCode = Math.floor(1000 + Math.random() * 9000).toString();
        user.resetCode = resetCode;
        user.resetCodeExpires = Date.now() + 600000; // 10 mins
        await user.save();

        let htmlContent = fs.readFileSync(path.join(__dirname, '../send.html'), 'utf8');
        htmlContent = htmlContent.replace('{{RESET_CODE}}', resetCode);
        htmlContent = htmlContent.replace('{{FULL_NAME}}', user.fullName);

        const message = {
            from: email,
            to: user.email,
            subject: "Password Reset Code",
            text: `Your password reset code is: ${resetCode}`,
            html: htmlContent
        };

        await transporter.sendMail(message);

        res.json({ status: httpStatusText.SUCCESS, message: 'Password reset email sent successfully' });
    } catch (err) {
        res.status(500).json({ status: httpStatusText.ERROR, message: err.message });
    }
};

// VERIFY RESET CODE
const verifyResetCode = async (req, res) => {
    try {
        const { email, code } = req.body;

        if (!email || !code) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'Email and code are required' });
        }

        const user = await User.findOne({
            email,
            resetCode: code,
            resetCodeExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'Invalid or expired reset code' });
        }

        user.resetCode = undefined;
        user.resetCodeExpires = undefined;
        await user.save();

        res.json({ status: httpStatusText.SUCCESS, message: 'Reset code verified successfully' });
    } catch (err) {
        res.status(500).json({ status: httpStatusText.ERROR, message: err.message });
    }
};

// UPDATE PASSWORD
const updatePassword = async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body;

        if (!email || !newPassword || !confirmPassword) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'All fields are required' });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ status: httpStatusText.FAIL, message: 'Passwords do not match' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: httpStatusText.FAIL, message: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.json({ status: httpStatusText.SUCCESS, message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ status: httpStatusText.ERROR, message: err.message });
    }
};

module.exports = {
    sendPasswordResetEmail,
    verifyResetCode,
    updatePassword
};
