const {check, validationResult } = require('express-validator');

exports.validateUserSignUp = [
    check('username').trim()
    .isEmpty().withMessage('Username is required.')
    .isString().withMessage('Username must be a valid username.')
    .isLength({min: 3, max: 255}).withMessage('Username must be within 3 to 255 characters.'),
    
    check('email').normalizeEmail().isEmail().
    withMessage('Invalid Email.'),
    
    check('password').trim().not().isEmpty().withMessage('Password is Empty').
    isLength({min:8, max: 255}).
    withMessage('Password must be within 8 to 255 characters.')
]

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array();
        if(result.length) return next();

        const error = result[0].msg;
        res.json({success: false, message: error });
}