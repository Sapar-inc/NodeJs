// const sum = require("./sum")
// console.log(sum(1,2))

const fs = require('fs')
// fs.readFile('./sum.js', 'utf8', function(err,data) {
//     console.log(err)
// })
const dataForWrite = 'Something good!'
fs.writeFile('./text.txt', dataForWrite, (err) =>{
    console.log(err)
})

