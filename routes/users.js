var express = require('express');
var router = express.Router();
const Student = require('../models/student.model')
const Staff = require('../models/staff.model')
/* GET users listing. */
router.get('/staff', async function(req, res, next) {
  const staff = await  Staff.find().exec();
  res.json(staff)
});

router.get('/student', async function(req, res, next) {
  const student = await  Student.find().exec();
  res.json(student)
});

router.get('/student/details', async (req, res) => {

  const emailAddress = req.query.studentEmail;

  const filter = {emailAddress};
  const student = await Student.findOne(filter).exec();

  if(student == null ){
    res.status(404)
  }

  res.json({student})

});

router.get('/staff/details', async (req, res) => {

  const staffEmail = req.query.staffEmail;

  const filter = {staffEmail};
  const staff = await Staff.findOne(filter).exec();

  if(staff == null ){
    res.status(404)
  }

  res.json({staff})

});


module.exports = router;
