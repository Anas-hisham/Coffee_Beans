const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

router.post('/send-reset-code', emailController.sendPasswordResetEmail);
router.post('/verify-reset-code', emailController.verifyResetCode);
router.post('/update-password', emailController.updatePassword);

module.exports = router;
