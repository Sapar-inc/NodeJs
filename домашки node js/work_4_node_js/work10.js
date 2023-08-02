let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const matrixSum = matrix => [].concat(...matrix).reduce((a, b) => a + b)

console.log(matrixSum(arr))