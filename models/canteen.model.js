const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const canteenModel = new Schema({
    studentId: {
        type: Number
    },

    checkinTime: {
        type: Date
    },

    staffId: {
        type: Number
    }
});

const model = mongoose.model("Canteen", canteenModel);

module.exports = model;