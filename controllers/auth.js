const express = require("express");
const router = express.Router();

module.exports = router;

router.get('sign-up', (res,req,next) => {
    res.render('sign-up.ejs')
})