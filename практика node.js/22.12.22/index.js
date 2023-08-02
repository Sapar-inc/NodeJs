const express = require('express');
const app = express();
const fs = require('fs');
const serch_smooth = 60;
const items = [
    {
      name: 'iPhone 12 pro max'
    },
    {
      name: 'iPhone 13 pro max'
    },
    {
      name: 'Газовая плита'
    },
    {
      name: 'samsung galaxy s21'
    },
    {
      name: 'samsung galaxy a10'
    },
    {
      name: 'nothing phone 3'
    },
    {
      name: 'smart tv +'
    },
    {
      name: 'linovo notebook v2176583'
    },
    {
      name: 'nothing pods 2'
    },
    {
      name: 'iPhone 8s'
    }
  ];

const limit = 100;

const goods = JSON.parse(Buffer.from(fs.readFileSync('dataSet.json').toString('utf-8')));

const amazon_goods = JSON.parse(JSON.stringify(goods.ae));

// console.log(amazon_goods);

app.get('/search/:searchString', searchHandler);

function searchHandler (req, res) {
  let start_date = new Date();
  // const items_copy = [...items];
  // const items_copy = items.map(element => element);
  const items_copy = JSON.parse(JSON.stringify(amazon_goods));

  // const searchString = req.params.searchString; // развернуто
  const searchString = req.params.searchString.toLowerCase().replaceAll(' ', ''); // с деструктуризатором
  const resulted_items = [];

  for(let item of items_copy) {
      for(let i = 0; i < searchString.length; i++){
          if(!item['count']) item['count'] = 0;

          if(item.product_name.toLowerCase().replaceAll(' ', '').includes(searchString[i])) {  
              item['count']++;
          }
      }

      if(!item['percent']) item['percent'] = 0.0;
      item.percent = (item.count / searchString.length) * 100;
      
      if(item.percent >= serch_smooth) {
          resulted_items.push(item)
      }
  }

  resulted_items.sort((item, next) => {
      if (item.percent < next.percent) {
          return 1;
      }
      if (item.percent > next.percent) {
          return -1;
      }
      return 0;
  });

  let end_date = new Date();

  console.log(end_date - start_date)

  // return res.send(JSON.stringify(resulted_items.slice(0, 3)));
  return res.send(JSON.stringify(resulted_items.slice(0, limit)));
}

app.get('/search/:searchString/filter/:key/:value', filterHandler);

// function getUniqueProperties (itemsArr){
//   let obj = {}
//   for(let item of itemsArr){
//       for(let key in item){
//           if(!Object.keys(obj).includes(key)){obj[key] = []}
          
//           if(!obj[key].includes(item[key])){obj[key].push(item[key])}
//           // obj[key].push(item[key])
//       }
//   }
// //   console.log(obj)
//   return obj
// }

function filterHandler(key, value){
    const uniqueProperties = JSON.parse(Buffer.from(fs.readFileSync('./unique_properties_dump.json').toString('utf-8')))

    if(!uniqueProperties[key]) return 'error'
    if(!uniqueProperties[key].includes(value)) return 'error lol'
  const result = [];

  for(const good of amazon_goods) {
    if(good[key] == value) result.push(good);

    else if(result.length >= limit) break;
  }

  return result;
}
// console.log(getUniqueProperties(amazon_goods))
console.log(filterHandler("color",'True Black'))
console.log("OK")

app.listen(3000);