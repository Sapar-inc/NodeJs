

const generateUID = length =>{
    let str = 'qwertyuiopasdfghjklzxcvbnm'
    let randomRes = ''

    for(let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * str.length)
        let randomStr = str[random]
        let randomNum = Math.floor(Math.random() * 9)
        let Symbol = [randomStr,JSON.stringify(randomNum)]
        let randomSymbol = Math.floor(Math.random() * Symbol.length)

        randomRes += Symbol[randomSymbol]
    }
    return randomRes
}
console.log(generateUID(23))