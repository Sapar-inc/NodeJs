let arr = [1, 6, 11, 24, 0, Infinity, 1, 6, 45, 1000]
const sortToLow = array =>{
  return  array.sort((a, b) => b - a)
}
console.log(sortToLow(arr))