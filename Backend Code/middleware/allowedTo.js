
module.exports = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.currentUser.role)) {
            return res.status(401).json({ status: httpStatusText.ERROR, message: 'this role is not authorized' });
        }
        next();
    };
}