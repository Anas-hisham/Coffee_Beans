const jwt = require('jsonwebtoken');
const httpStatusText = require('../utils/httpStatusText');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ status: httpStatusText.ERROR, message: 'token is required' });

    const token = authHeader.split(' ')[1];
    try {
        const currentUser = jwt.verify(token, JWT_SECRET_KEY);
        req.currentUser = currentUser;
        next();
    } catch {
        return res.status(401).json({ status: httpStatusText.ERROR, message: 'invalid token' });
    }

}

module.exports = verifyToken;