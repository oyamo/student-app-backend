var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({status:"Success",message:"Hello world", info:"This is the API registration page, When you see this, you have successfully registered with the server", routes:["/api/users/staff","/api/users/student"]})
});

module.exports = router;
