const mongoose = require('mongoose');
const passportLocal = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },

    password: {
        type: String
    },

    email: {
        type: String
    },

    phone: {
        type: String
    }
});

UserSchema.plugin(passportLocal);
const User = new mongoose.model('users', UserSchema);

module.exports = User;