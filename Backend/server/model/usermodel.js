const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true},
    contactNumber: {type:String, required: true},
    gender: {type:String, required: true},
    language: {type:String, required: true},
    uploadResume: {type:String, required: true},
    enterUrl: {type:String, required: true},
    about: {type: String, required: true}
})

UserSchema.pre('save', async function (next) {
    return next();
})


const User = mongoose.model('user', UserSchema);

module.exports = User;