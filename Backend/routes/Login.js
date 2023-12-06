const express  = require('express');
const router = express.Router();
const { createUser, userSignIn, getUserData, updateUserProfile } = require('../controllers/LoginController');
const { sendVerificationCode, verifyCode, resetPassword } = require('../controllers/ForgotPasswordController');
const { validateUserSignUp, userValidation, validateUserSignIn, validatePassReset } = require('../middleware/validation/user');
const { isAuth } = require('../middleware/validation/auth');

router.post('/create-user', validateUserSignUp, createUser);
router.post('/sign-in', validateUserSignIn, userValidation, userSignIn);
router.get('/user-data', isAuth, getUserData); 
router.post('/create-post', isAuth, (req, res) => {
    res.send('Token Authentication path');
});
router.patch('/update-user', isAuth, updateUserProfile);
router.post('/send-code', sendVerificationCode);
router.post('/verify-code', verifyCode);
router.patch('/reset-password', resetPassword);


module.exports = router;
