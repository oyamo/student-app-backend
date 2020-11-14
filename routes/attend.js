const express = require('express')
const  router = express.Router();

const staffM = require('../util/staff.middleware');
const studentM = require('../util/student.middleware');

const Attendance = require('../models/attendance.model');

router.get("/:studentId/:staffId" , staffM, studentM, async (req, res) => {
    const staffObj = req.staff;
    const studentObj = req.student;

    if(staffObj == null || studentObj == null){
        res.json({"success":false})
        return;
    }

    await Attendance.create({
        course: studentObj.course,
        studentId: studentObj.studentId,
        checkinDate: new Date(),
        staffId:  staffObj.staffId
    })

    res.json({"success":true})
})


module.exports = router