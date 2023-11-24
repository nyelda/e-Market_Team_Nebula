const mongoose = require('mongoose');

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