const express = require('express')
const  router = express.Router();

const staffM = require('../util/staff.middleware');
const studentM = require('../util/student.middleware');

router.get("/:studentId/:staffId" , staffM, studentM, (req, res) => {
    const staffObj = req.staff;
    const studentObj = req.student;

    res.json({"success":true})
})


module.exports = router