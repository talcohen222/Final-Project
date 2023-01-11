const mongoose = require('mongoose');

const user = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    uploadedOn: {
        type: ISODate,
    }
}, {autoIndex: true});
const User = mongoose.model('User', userSchema);