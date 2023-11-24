const express  = require('express');

const router = express.Router();
const { createUser, userSignIn } = require('../controllers/LoginController');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middleware/validation/user');
const { isAuth } = require('../middleware/validation/auth');
// const { validationResult } = require('express-validator');

router.post('/create-user', validateUserSignUp, userValidation, createUser);
router.post('/sign-in',validateUserSignIn, userValidation, userSignIn)
router.post('/create-post', isAuth, (req, res) => {
    res.send('Token Authentication path')
})
module.exports = router;