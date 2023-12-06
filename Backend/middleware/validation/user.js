const {check, validationResult } = require('express-validator');

exports.validateUserSignUp = [
    check('username')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Username is required.'),
    
    check('email').normalizeEmail().isEmail().
    withMessage('Invalid Email.'),
    
    check('password').trim().not().isEmpty().withMessage('Password is Empty').
    isLength({min:8, max: 255}).
    withMessage('Password must be within 8 to 255 characters.'),

    check('fullname')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Full name is required.'),

check('contactNumber')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Contact number is required.'),

check('program')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Program is required.'),

check('yearLevel')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Year level is required.')
]

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array();
  
    if (result.length) {
      console.log('Validation Errors:', result);
      return res.json({ success: false, message: result[0].msg });
    }
  
    next();
  };


exports.validateUserSignIn = [
    check('username')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Your username/password is required.'),

    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Your username/password is required.')
]

exports.validatePassReset = [

    check('password').trim().not().isEmpty().withMessage('Password is Empty').
    isLength({min:8, max: 255}).
    withMessage('Password must be within 8 to 255 characters.'),
]