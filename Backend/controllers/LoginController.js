const jwt = require('jsonwebtoken');
const User = require('../models/Login');

exports.createUser = async (req, res) => {
    const {email, username, password} = req.body
    const isNewUser = await User.isThisEmailInUse(email);
    if (!isNewUser)
        return res.json({
            success: false,
            message: 'This email is already in use, try Log in.'
        });
    const user = await User({
        email,
        username,
        password,
    });
    await user.save();
    res.json(user);
};

exports.userSignIn = async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})

    if(!user) return res.json({success: false, message: 'Username not found.'})

    const isMatch = await user.comparePassword(password)
    if(!isMatch) return res.json({
        success: false, 
        message: 'Username/Password does not match.',
        });

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, 
        {expiresIn: '365d'});

    res.json({success: true, user, token})
};

