const  Staff = require('../models/staff.model');

const middleware = async (req, res, next)=>{
    const staffId = req.params.staffId;
    const filter = {staffId};
    req.staff = await Staff.findOne(filter).exec();
    next();
}

module.exports = middleware;