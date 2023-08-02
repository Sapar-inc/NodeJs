let matrix = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 1, 0, 0, 0, 1, 0, 1],
	[2, 0, 1, 0, 0, 0, 1, 0, 1],
	[1, 0, 1, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 0, 1, 0, 3],
	[1, 0, 0, 0, 0, 0, 1, 0, 1],
	[1, 1, 1, 1, 0, 0, 1, 0, 1]
]
// let player = "4"

setTimeout(() =>{ 
	matrix[2][1] = matrix[2][1] + 4
	console.log(JSON.stringify(matrix))
},1500 )
setTimeout(() =>{ 
	matrix[2][1] = matrix[2][1] - 4
	matrix[3][1] = matrix[3][1] + 4
	console.log(JSON.stringify(matrix))
},2500 )
setTimeout(() =>{ 
	matrix[3][1] = matrix[3][1] - 4
	matrix[4][1] = matrix[4][1] + 4
	console.log(JSON.stringify(matrix))
},3500 )
setTimeout(() =>{ 
	matrix[4][1] = matrix[4][1] - 4
	matrix[4][2] = matrix[4][2] + 4
	console.log(JSON.stringify(matrix))
},4500 )
setTimeout(() =>{ 
	matrix[4][2] = matrix[4][2] - 4
	matrix[4][3] = matrix[4][3] + 4
	console.log(JSON.stringify(matrix))
},5500 )
setTimeout(() =>{ 
	matrix[4][3] = matrix[4][3] - 4
	matrix[3][3] = matrix[3][3] + 4
	console.log(JSON.stringify(matrix))
},6500 )
setTimeout(() =>{ 
	matrix[3][3] = matrix[3][3] - 4
	matrix[3][4] = matrix[3][4] + 4
	console.log(JSON.stringify(matrix))
},7500 )
setTimeout(() =>{ 
	matrix[3][4] = matrix[3][4] - 4
	matrix[3][5] = matrix[3][5] + 4
	console.log(JSON.stringify(matrix))
},8500 )
setTimeout(() =>{ 
	matrix[3][5] = matrix[3][5] - 4
	matrix[4][5] = matrix[4][5] + 4
	console.log(JSON.stringify(matrix))
},9500 )
setTimeout(() =>{ 
	matrix[4][5] = matrix[4][5] - 4
	matrix[4][6] = matrix[4][6] + 4
	console.log(JSON.stringify(matrix))
},10500 )
setTimeout(() =>{ 
	matrix[4][6] = matrix[4][6] - 4
	matrix[4][7] = matrix[4][7] + 4
	console.log(JSON.stringify(matrix))
},11500 )
setTimeout(() =>{ 
	matrix[4][7] = matrix[4][7] - 4
	matrix[5][7] = matrix[5][7] + 4
	console.log(JSON.stringify(matrix))
},12500 )
setTimeout(() =>{ 
	matrix[5][7] = matrix[5][7] - 4
	matrix[6][7] = matrix[6][7] + 4
	console.log(JSON.stringify(matrix))
},13500 )
setTimeout(() =>{ 
	matrix[6][7] = matrix[6][7] - 4
	matrix[6][8] = matrix[6][8] + 4
	console.log(JSON.stringify(matrix))
},14500 )
setTimeout(() =>{ 
	console.log(JSON.stringify(matrix))
},20500 )
// setTimeout(() =>{ 
// 	matrix[7][7] = matrix[7][7] - 4
// 	matrix[8][6] = matrix[8][] + 4
// 	console.log(JSON.stringify(matrix))
// },1500 )




