
const  Student = require('../models/student.model');

const middleware = async (req, res, next)=>{
    const studentId = req.params.studentId;
    const filter = {studentId};
    req.staff = await Student.findOne(filter).exec();
    next();
}

module.exports = middleware;