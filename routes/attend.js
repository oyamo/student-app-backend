const express = require('express')
const  router = express.Router();

router.get("/:studentId/" , (req, res) => {
    const studentId = req.params.studentId;

    res.json({"success":true})
})


module.exports = router