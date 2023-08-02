let nums = [-9, -1, 4, 25, -99999, 8]

const Module = arr => {
let get = []

for(item of nums){
    get.push(Math.abs(item))
}
return get
}
console.log(Module(nums))
