const express = require('express')
const  router = express.Router();

const staffM = require('../util/staff.middleware');
const studentM = require('../util/student.middleware');

const Canteen = require('../models/canteen.model');

router.get("/:studentId/:staffId" , staffM, studentM, async (req, res) => {
    const staffObj = req.staff;
    const studentObj = req.student;

    if(staffObj == null || studentObj == null){
        res.json({"success":false})
        return;
    }
    await Canteen.create({
        studentId: studentObj.studentId,
        staffId: staffObj.staffId,
        checkinTime: new Date()
    })
    res.json({"success":true})
})


module.exports = router