const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dormSchema = new Schema({
    studentId: {
        type: Number
    },
    dormName: {
        type: String
    },
    checkinDate: {
        type: Date
    },
    staffID: {
        type: Number
    }
});

const model = mongoose.model("Dorm", dormSchema);

module.exports = model;
