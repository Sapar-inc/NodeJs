const express = require('express')
const app = express()
let arr = []

app.get('/plus/:firstNum', function(req,res){

    const data = req.params
    let sum = +data.firstNum
    for(let i = 0; i < +arr.length; i++){
       sum = sum + +data.firstNum
    }
    arr.push(data.firstNum)
    return res.send(`arfm: ${sum / arr.length},arr: [${arr}], sum: ${sum}`)
}).listen(8080)
