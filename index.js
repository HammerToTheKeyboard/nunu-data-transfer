require('dotenv').config()

const dataTransfer = require("./Functions/dataTransfer")

const mongoose = require("mongoose")

/**
 * DATABASE CONNECTION
 * 
 * @version 1.0.0
 */
mongoose.connect(process.env.DATABASE, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('== DATABASE CONNECTED ==')
})
.catch(error => {
    console.error('== ! UNABLE TO CONNECT TO DATABASE ! ==')
    console.error(error)
})

/**
 * DATA TRANSFER
 * 
 * @version 1.0.0
 */
dataTransfer()