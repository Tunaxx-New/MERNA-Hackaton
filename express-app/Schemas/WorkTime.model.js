const mongoose = require('mongoose');

const WorkTimeSchema = new mongoose.Schema({
    cashier_id: {
        type: String
    },

    start_time: {
        type: String
    },

    end_time: {
        type: String
    },

    completed: {
        type: Boolean,
        default: false
    }
});

const WorkTime = new mongoose.model('workTimes', WorkTimeSchema);

module.exports = WorkTime;