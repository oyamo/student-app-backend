const express = require('express')
const  router = express.Router()
const Student = require('../models/student.model')
const Staff = require('../models/staff.model')

router.get('/', async (req, res)=> {
    const staff = [
        {staffId: 12, staffName: "Julian Omore", staffEmail: "julian@gmail.com", staffType: "CANTEEN"},
        {staffId: 13, staffName: "Peter James", staffEmail: "peterjames@gmail.com", staffType: "TAMAM"},
        {staffId: 14, staffName: "Jane Musyoka", staffEmail: "janemusyoka@gmail.com", staffType: "TEACHER"},
        {staffId: 15, staffName: "Patrick Mohammed", staffEmail: "ahmed@uaeu.ac.eu", staffType: "TEACHER"},
        {staffId: 16, staffName: "Ahmed Nora", staffEmail: "nora@uaeu.ac.eu", staffType: "CANTEEN"},
        {staffId: 17, staffName: "Akram Nuel", staffEmail: "akram@uaeu.ac.eu", staffType: "TAMAM"},
    ];

    const students = [
        {studentId: 100, studentName: "Philip Odhiambo", hostelName: "red woods", studentBuilding: "Building D", studentPhoneNo: "+1 8988038333", emailAddress: "phillip@gmail.com", course: "Computer Science"},
        {studentId: 101, studentName: "Mary Grey", hostelName: "red woods", studentBuilding: "Building D", studentPhoneNo: "+1 963030903909", emailAddress: "maria@gmail.com", course: "IT"},
        {studentId: 102, studentName: "Andrew Yellow", hostelName: "red woods", studentBuilding: "Building D", studentPhoneNo: "+1 123334444", emailAddress: "andrew@gmail.com", course: "ITE 50"},
        {studentId: 103, studentName: "Mathew Green", hostelName: "red woods", studentBuilding: "Building D", studentPhoneNo: "+1 1083083044", emailAddress: "mathew@gmail.com", course: "ITE 50"},
        {studentId: 104, studentName: "Oyamo Brian", hostelName: "yellow woods", studentBuilding: "Building D", studentPhoneNo: "+254793875319", emailAddress: "oyamo.xyz@gmail.com", course: "Computer Science"},
        {studentId: 105, studentName: "Imagination Girl", hostelName: "purple woods", studentBuilding: "Building D", studentPhoneNo: "+254793875319", emailAddress: "imagination.girl88@gmail.com", course: "Computer Science"},
        {studentId: 106, studentName: "Mohamed Ruel", hostelName: "purple woods", studentBuilding: "Building D", studentPhoneNo: "+254793875319", emailAddress: "20202020@uaeu.ac.eu", course: "Computer Science"},
        {studentId: 107, studentName: "John Doe", hostelName: "purple woods", studentBuilding: "Building D", studentPhoneNo: "+254793875319", emailAddress: "20212021@uaeu.ac.eu", course: "Computer Science"},
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