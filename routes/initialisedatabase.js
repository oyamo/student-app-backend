const express = require('express')
const  router = express.Router()
const Student = require('../models/student.model')
const Staff = require('../models/staff.model')

router.get('/', async (req, res)=> {
    const staff = [
        {staffId: 12, staffName: "Julian Omore", staffEmail: "julian@gmail.com", staffType: "CANTEEN"},
        {staffId: 13, staffName: "Peter James", staffEmail: "peterjames@gmail.com", staffType: "TAMAM"},
        {staffId: 14, staffName: "Jane Musyoka", staffEmail: "janemusyoka@gmail.com", staffType: "TEACHER"},
    ];

    const students = [
        {studentId: 100, studentName: "Philip Odhiambo", hostelName: "red woods", studentBuilding: "Building D", studentPhoneNo: "+1 8988038333", emailAddress: "phillip@gmail.com", course: "Computer Science"},
        {studentId: 101, studentName: "Mary Grey", hostelName: "red woods", studentBuilding: "Building D", studentPhoneNo: "+1 963030903909", emailAddress: "maria@gmail.com", course: "IT"},
        {studentId: 102, studentName: "Andrew Yellow", hostelName: "red woods", studentBuilding: "Building D", studentPhoneNo: "+1 123334444", emailAddress: "andrew@gmail.com", course: "ITE 50"},
        {studentId: 103, studentName: "Mathew Green", hostelName: "red woods", studentBuilding: "Building D", studentPhoneNo: "+1 1083083044", emailAddress: "mathew@gmail.com", course: "ITE 50"},
        {studentId: 104, studentName: "Oyamo Brian", hostelName: "yellow woods", studentBuilding: "Building D", studentPhoneNo: "+254793875319", emailAddress: "oyamo.xyz@gmail.com", course: "Computer Science"},
    ]
    await Student.deleteMany({})
    await Staff.deleteMany({})

    await Staff.collection.dropIndexes();
    await Student.collection.dropIndexes();

    await Student.insertMany(students)
    await Staff.insertMany(staff)
    res.json({status:"Success", message:"Models initialised"})

})

module.exports = router