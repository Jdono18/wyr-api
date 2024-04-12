const express = require('express')  // import express library

const indexRouter = require('./routes/index.js')  // import index.js as indexRouter

const app = express() // make new web application server

app.use('/', indexRouter)  // send everything through indexRouter to be handled

const server = app.listen(process.env.PORT || 3000, function() {    // start server on port 3000
    console.log('Server running on port ', server.address().port)  // print output
})

