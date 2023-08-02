const express = require('express')
const app = express()
let arr = []
num = 0

const items = [ 
    { 
        name: 'iPhone 8', 
        color: "black",
        memory: "256gb" 
    }, 
    { 
        name: 'iPhone 10',
        color: "red", 
        memory: "124gb" 
    }, 
    { 
        name: 'iPhone 11 white',
        color: "yellow", 
        memory: "512gb" 
    }, 
    { 
        name: 'Газовая плита',
        color: "black", 
        memory: "256gb" 
    }, 
    { 
        name: 'айфон',
        color: "red",
        memory: "124gb" 
    }, 
    { 
        name: 'samsung galaxy s21',
        color: "yellow",
        memory: "512gb" 
    }, 
    { 
        name: 'ipad air 9',
        color: "black",
        memory: "256gb" 
    }, 
]

app.get('/plus/:firstNum', function(req,res){
    const data = req.params
    arr.push(data.firstNum)
    for(let i = 0; i < +arr.length; i++){
       num = num + +arr[i]
    }
    return res.send(`arfm: ${num / arr.length},arr: [${arr}], sum: ${num}`)
})
app.get('/minus/:firstNum/:secondNum', function(req,res){
    const data = req.params
    return res.send(data)
})

app.get('/search/:SearchString', function(req,res){
    const data = req.params
    return res.send(items.includes('ipad air 9'))   
    
    // for(let item of items){
    //     if(items.includes(data.SearchString)){
            
    //     }
    // } 
})
app.get('/filter/:color/:memory', function(req,res){
    const data = req.params
    return res.send(items.includes('ipad air 9'))   
    
    // for(let item of items){
    //     if(items.includes(data.SearchString)){
            
    //     }
    // } 
})
app.listen(8080)
for(let item of items){
    arr.push(item.name)
 }
 let arrColor = []
 let arrMemory = []
 let arrName = []
const getFilter = (items) =>{
    const resultedObj = {}
    for(const item of items){
        for(const key in item){
            if(!Object.keys(resultedObj).includes(key)){
                resultedObj[key] = []
            }
            resultedObj[key].push(item[key])
        }
    }
    let resultedObj2 = []
    let resultedObjKey = {}

    let tempArr = [...resultedObj.color, ...resultedObj.memory].sort()
    for(let i = 0; i < tempArr.length; i++){
        tempArr[i] != tempArr[i - 1] && resultedObj2.push(tempArr[i])
        for(let key in items){
            
        }
        
    }
    
    return resultedObj2
}
console.log(getFilter(items))



// console.log(arr.includes('ipad air 9'))
