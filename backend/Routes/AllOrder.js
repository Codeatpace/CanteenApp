const express = require('express');
const router = express.Router()
const Order = require('../models/Orders')

router.post('/allOrder', async(req, res) => {
    try {
        // console.log("All orders page")
        res.send([global.orders])
    } catch (error) {
        res.send("Server Error", error.message)
    }
}) 


module.exports = router;