let num = 0
const http = require('http')
const server = http.createServer(function(req,res){
    res.writeHead(200)
    res.end(String(num++))
}).listen(3000)
