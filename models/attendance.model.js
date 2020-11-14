const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

    studentId :{
        type: String
    },

    course: {
        type: String
    },

    checkinDate: {
        type: Date
    },
    staffId: {
        type: Number
    }
});

const mode = mongoose.model("Attendance", attendanceSchema)

module.exports = mode