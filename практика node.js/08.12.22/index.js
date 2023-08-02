// const html = Buffer.from(fs.readFileSync('./index.html')).toString('utf-8')

const http = require('http')

const server = http.createServer(function(req,res){

    const parsedUrlData = paraseUrl(req.url)
    console.log(parsedUrlData)
    if(parsedUrlData.functionName === 'calc'){
        const result = calc(parsedUrlData.params)
        res.writeHead(200)
        return res.end(`<h1>${result}</h1>`)

    }else{
        res.writeHead(200)
        return res.end('hello')
    }
    function calc (params){
    //     let sum = +params.first + +params.second 
    //    return JSON.stringify(sum)
        
        return eval(`${params.first}${params.symbol}${params.second}`)
    }
    
})
server.listen(8080)

const str = '/calc?first=10&second=20&symbol=+'
const paraseUrl = url =>{
    const parts = str.split('?')
    const functionName = parts[0].slice(1)
    const params = {}
    const stringParams = parts[1].split('&')
    for(const param of stringParams){
        const tmp = param.split('=')
        params[tmp[0]] = tmp[1] 
    }
    return {functionName, params}
}
