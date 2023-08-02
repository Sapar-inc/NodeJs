const items = [
    {
      name: 'iPhone 12 pro max',
      color: 'white',
      weight: 100
    },
    {
      name: 'iPhone 13 pro max',
      color: 'black',
      weight: 85
    },
    {
      name: 'Газовая плита',
      color: 'black',
      weight: 1000
    },
    {
      name: 'samsung galaxy s21',
      color: 'white',
      weight: 25
    },
    {
      name: 'samsung galaxy a10',
      color: 'orange',
      weight: 10000000
    },
    {
      name: 'nothing phone 3',
      color: 'green',
      weight: 850
    },
    {
      name: 'smart tv +',
      color: 'black',
      weight: 25
    },
    {
      name: 'linovo notebook v2176583',
      color: 'purple',
      weight: 10
    },
    {
      name: 'nothing pods 2',
      color: 'gray',
      weight: 1
    },
    {
      name: 'iPhone 8s',
      color: 'pink',
      weight: 0
    }
  ];

function filterHandler(key, value){ 
    for(let item of items){
       if(item[key] == value){
        console.log(`\n${item.name}\n${key}: ${value}\n`)
       }
    }
}

filterHandler('color','black')