const mongoose = require('mongoose');

const UserRoleSchema = new mongoose.Schema({
    user_id: {
        type: String
    },

    role: {
        type: String
    }
});

const UserRole = new mongoose.model('user-i:n-role', UserRoleSchema);

module.exports = UserRole;