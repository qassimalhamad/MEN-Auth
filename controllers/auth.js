const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

module.exports = router;

router.get('/sign-up', (req, res , next) => {
    res.render('auth/sign-up.ejs')
})

router.post("/sign-up", async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    try {
        const existingUser = await User.findOne({
            username,
        })
        if(existingUser){
            return res.send('Oops something went wrong')
        }

        if(password !== confirmPassword){   
            return res.send('Password and Confirm Password do not match');
        }


    } catch (error) {
        
    }
  });