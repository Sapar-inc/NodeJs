let str = 'IPhone 10+ white; 256gb'

const cleanString = string =>{
    return string.replace(/[^+\w\s]|_/g, "")
            .replaceAll(" ", "")
            .toLowerCase()
}
console.log(cleanString(str))