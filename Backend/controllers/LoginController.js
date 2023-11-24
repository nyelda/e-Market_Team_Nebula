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
}
