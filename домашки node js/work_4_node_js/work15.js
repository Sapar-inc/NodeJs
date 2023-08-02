let matrix = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let lol = [

]
for(let i = 0; i < matrix.length; i++){
    for(let k = 0; k < matrix[i].length; k++){
      matrix[0][k] = 1
      matrix[matrix.length-1][k] = 1
      if(matrix[i][0] == 0 && matrix[i][matrix[i].length-1] == 0){
        matrix[i][0] = 1
        matrix[i][matrix[i].length-1] = 1
      }
    }
}
console.log(matrix)