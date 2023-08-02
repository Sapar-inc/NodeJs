const array1 = [{id:1, login:"asd0"}, {id:2, login:"asd0"}];
let {id} = req.body

const isLargeNumber = (element) => element.id == id;

console.log(array1.findIndex(isLargeNumber));