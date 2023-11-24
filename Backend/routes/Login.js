const express  = require('express');

const router = express.Router();
const { createUser } = require('../controllers/LoginController');
const { validateUserSignUp, userValidation } = require('../middleware/validation/user');
const { validationResult } = require('express-validator');

router.post('/create-user', validateUserSignUp, userValidation, createUser);

module.exports = router;