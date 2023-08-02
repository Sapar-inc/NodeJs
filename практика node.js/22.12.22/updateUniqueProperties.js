const fs = require('fs')

function getUniqueProperties (itemsArr){
    let obj = {}
    for(let item of itemsArr){
        for(let key in item){
            if(!Object.keys(obj).includes(key)){obj[key] = []}
            
            if(!obj[key].includes(item[key])){obj[key].push(item[key])}
            // obj[key].push(item[key])
        }
    }
  //   console.log(obj)
    return obj
  }

function saveUniqueProperties(){
    const goods = JSON.parse(Buffer.from(fs.readFileSync('dataSet.json').toString('utf-8')));

    const amazon_goods = JSON.parse(JSON.stringify(goods.ae));

    const uniqueProperties = getUniqueProperties(amazon_goods)

    fs.writeFileSync('unique_properties_dump.json' , JSON.stringify(uniqueProperties))
}
saveUniqueProperties()
setInterval(() => saveUniqueProperties(), 1*60*60*1000)