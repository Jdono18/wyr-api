const express = require('express') // import express library
const router = express.Router()  // import router function
const randomWYRQuestion = require('../model/wyr_questions')  // import listed function from path

router.get('/', function(req,res,next){
    res.send('Placeholder for home page')
})

router.get('/wyr', function(req, res, next) {
    // const wyr = {
    //     'question': 'Live in a circle house or a triangle house',
    //     'answer1': 'Circle house',
    //     'answer2': 'Triangle house'
    // }

    const wyr = randomWYRQuestion()
    res.json(wyr)  // package response as json

})

module.exports = router