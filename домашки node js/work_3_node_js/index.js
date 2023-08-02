// let num = 0
// const http = require('http')
// const server = http.createServer(function(req,res){
//     res.writeHead(200)
//     res.end(String(num++))
// }).listen(3000)

let fruts = ['apple', 'pineapple', 'cucumber', 'orange']
let color = ['red', 'yellow', 'green', 'orange']

const joinArraysToObject = (arr1,arr2) =>{
    let obj = {}
    for(let i = 0; i < arr1.length; i++){
        obj[arr1[i]] = arr2[i]
        
    }
    return obj
}
console.log(joinArraysToObject(fruts,color))
