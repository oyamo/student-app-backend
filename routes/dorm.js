const express = require('express')
const  router = express.Router();

const staffM = require('../util/staff.middleware');
const studentM = require('../util/student.middleware');

const Dorm = require('../models/dorm.model');

router.get("/:studentId/:staffId" , staffM, studentM, async (req, res) => {
    const staffObj = req.staff;
    const studentObj = req.student;

    if(staffObj == null || studentObj == null){
        res.json({"success":false})
        return;
    }

    await Dorm.create({
        dormName: studentObj.hostelName,
        studentId: studentObj.studentId,
        checkinDate: new Date(),
        staffId:  staffObj.staffId
    });

    res.json({"success":true})
})


module.exports = router