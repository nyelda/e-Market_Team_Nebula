const express  = require('express');
const router = express.Router();
const { createUser, userSignIn, getUserData } = require('../controllers/LoginController');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middleware/validation/user');
const { isAuth } = require('../middleware/validation/auth');

router.post('/create-user', validateUserSignUp, createUser);
router.post('/sign-in', validateUserSignIn, userValidation, userSignIn);
router.get('/user-data', isAuth, getUserData); 
router.post('/create-post', isAuth, (req, res) => {
    res.send('Token Authentication path');
});

module.exports = router;
