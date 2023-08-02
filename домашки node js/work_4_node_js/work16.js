const generateMatrix = (width, height, range) =>{
    
let arr = new Array();

for (let i=0; i < height; i++) {
    arr[i] = new Array();
    for (let j=0; j < width; j++){
        arr[i][j]=Math.floor(Math.random() * range);
    }
}
return arr
}
console.log(generateMatrix(3,2,500))