const  mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    studentId:{
        type: Number,
        unique: true
    },
    studentName: { type: String },
    hostelName:{ type: String },
    studentBuilding: { type: String },
    studentPhoneNo: { type: String },
    emailAddress: { type: String },
    course: { type: String }

});

module.exports = mongoose.model("Student", studentSchema );