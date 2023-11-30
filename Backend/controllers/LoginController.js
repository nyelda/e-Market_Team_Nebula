const jwt = require('jsonwebtoken');
const User = require('../models/Login');

exports.createUser = async (req, res) => {
    try {
        console.log('Received data in createUser:', req.body);

        const { email, username, password, contactNumber, yearLevel, program, fullname } = req.body;

        // Check if the email is already in use
        const isNewUser = await User.isThisEmailInUse(email);
        
        if (!isNewUser) {
            return res.json({
                success: false,
                message: 'This email is already in use, try logging in.',
            });
        }

        // Create a new user with all required fields
        const user = new User({
            email,
            username,
            password,
            fullname,
            contactNumber,
            program,
            yearLevel,
        });

        // Save the user to the database
        await user.save();

        console.log('User created successfully:', user);

        res.json({ success: true, user });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

// Import necessary modules

exports.userSignIn = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find the user based on the username or email
      const user = await User.findOne({ $or: [{ username }, { email: username }] });
  
      // Check if the user exists
      if (!user) {
        return res.json({ success: false, message: 'Username/Email not found.' });
      }
  
      // Check if the password is correct
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.json({ success: false, message: 'Username/Password does not match.' });
      }
  
      // Generate and send a token if the login is successful
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
      res.json({ success: true, user, token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

exports.getUserData = async (req, res) => {
    try {
        // Get user data from the authenticated user
        const user = req.user;

        res.json({ success: true, user });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
  


