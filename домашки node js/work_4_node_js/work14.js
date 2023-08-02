let str = 'dbwrajk@@@@asoiфываццц432цasj%%da'

const sortString = string => {
    let sort = str.split('').sort()
    let num = []
    let symbol = []
    let bykvi = []
    for(let item of sort){
        if(!/^[a-zA-Z0-9а-яА-Я]+$/.test(item)){
            symbol.push(item)
        }
        if(/^[0-9]+$/.test(item)){
            num.push(item)
        }
        if(/^[a-zA-Zа-яА-Я]+$/.test(item)){
            bykvi.push(item)
        }
    }
    return bykvi.join('') + num.join('') + symbol.join('')
}

console.log(sortString(str))