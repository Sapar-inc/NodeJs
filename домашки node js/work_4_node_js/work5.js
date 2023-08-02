let string = 'Hello World!'

const reverseStringAndSave = str =>{
    let i = str.length - 1;
    let result = ''

    while (i >= 0) {
      result = result + str[i];
      i = i - 1
    } 
    console.log(result)
} 
reverseStringAndSave(string)