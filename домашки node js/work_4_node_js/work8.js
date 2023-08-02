let str = 'Hello World!'
let obj = {}


const splitStringToObject = string =>{
    for(let i = 0; i < string.length; i++){
        obj[string[i]] = i
        console.log(`${string[i]}: ${i}`)
    }
}
splitStringToObject(str)