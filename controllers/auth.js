const express = require("express");
const router = express.Router();

module.exports = router;

router.get('/sign-up', (req, res , next) => {
    res.render('auth/sign-up.ejs')
})