// const http = require('http')

// const server = http.createServer(function(req,res){
//         console.log(req.url)
//         res.writeHead(300)
//         res.end('Hello')
// })

// server.listen(8080)

// const express = require('express')
// const app = express()
// let arr = []
// num = 0

// const items = [ 
//     { 
//         name: 'iPhone 8', 
//         color: "black",
//         memory: "256gb" 
//     }, 
//     { 
//         name: 'iPhone 10',
//         color: "red", 
//         memory: "124gb" 
//     }, 
//     { 
//         name: 'iPhone 11 white',
//         color: "yellow", 
//         memory: "512gb" 
//     }, 
//     { 
//         name: 'Газовая плита',
//         color: "black", 
//         memory: "256gb" 
//     }, 
//     { 
//         name: 'айфон',
//         color: "red",
//         memory: "124gb" 
//     }, 
//     { 
//         name: 'samsung galaxy s21',
//         color: "yellow",
//         memory: "512gb" 
//     }, 
//     { 
//         name: 'ipad air 9',
//         color: "black",
//         memory: "256gb" 
//     }, 
// ]

const express = require('express');
const app = express();
let arr = [];

const items = [
    {
        name: "iPhone 9"
    },
    {
        name: "iPhone X"
    },
    {
        name: "iPhone maxPro"
    },
    {
        name: "Стессовит"
    },
    {
        name: "Гепарин"
    },
    {
        name: "Иммудон"
    }
]

app.get('/search/:searchString', makeSearch);

function makeSearch (req, res) {
    // const searchString = req.params.searchString; // развернуто
    const {searchString} = req.params.toLowerCace().replaceAll(" ", ""); // с деструктуризатором

    for(let item of items) {
        if(item.name === searchString) {
            arr.push(item.name);
        }
    }

    return res.send(String(arr));
}

app.listen(8080);

// console.log(arr.includes('ipad air 9'))

let name = "iphone"
let count = 0

let arr2 = []

for(let i = 0; i < items.length; i++){
    if(items[i].name.includes(name[i])){
        console.log(items[i].name)
    }
}  
