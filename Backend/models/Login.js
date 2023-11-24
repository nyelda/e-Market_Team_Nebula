const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    prograrm: {
        type: String,
        required: true
    },
    yearLevel: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileImage: Buffer,
});

UserSchema.pre('save', function(next) {
    if(this.isModified('password')){
        bcrypt.hash(this.password, 8, (err, hash) => {
            if(err) return next(err);

            this.password = hash;
            next();
        })
    }
})

UserSchema.methods.comparePassword = async function (password) {
    if(!password) throw new Error('The password cannot be compared because it is missing.');

    try 
    {
        const result = await bcrypt.compare(password, this.password)
        return result;
    } 
    catch (error) 
    {
        console.log('Error while comparing password.', error.message)
    }
}

UserSchema.statics.isThisEmailInUse = async function(email) {
    if(!email) throw new Error('Invalid Email')
    try {
        const user = await this.findOne({email: email})
        if(user) return false

        return true;
    } catch (error) {
        console.log('Error inside isThisEmailInUse', error.message)
        return false
    }
    
}

module.exports = mongoose.model('User', UserSchema);