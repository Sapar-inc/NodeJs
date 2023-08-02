let arr = ["text","hello",4,5]
// const fs = require('fs')
const http = require('http')
// console.log(http)
// const html = Buffer.from(fs.readFileSync('./index.html')).toString('utf-8')
// console.log(html)
// fs.writeFileSync('text.js', 'let a = 2')
// fs.unlinkSync('text.js')

const server = http.createServer(function(req,res){
    if(req.url !== 'favicon.ico'){
        console.log(req.url)
        res.writeHead(300)
        res.end('<h1>Hello</h1>')
    }else{
        res.writeHead(400)
        res.end('FAVICON')
    }

})
server.listen(8080)
