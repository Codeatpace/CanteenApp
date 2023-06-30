const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/canteenside', async(req, res) => {
    try {
        console.log("AllorderPage")
        // let email = req.body;
        let email = req.body.email;
        let myData = await User.findOne({email})
        // res.send(myData.userRole)
        if(myData.userRole == 'admin'){
            res.json({message:"Admin Page"})
        }
        else{
            res.json({message:"UserPge"})
        }
        console.log(myData.userRole)
    } catch (error) {
        res.send("Server Error", error.message)
    }
})


module.exports = router;