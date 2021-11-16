let objects = [
  { name: 'Василий', surname: 'Васильев',  price: { base: 100, vat: 20} },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
  ]

function arrayFilter(arry, prop, propValue) {
  let filtered = [];
  let filter = `${prop},${propValue}`
  let arrayForFilter = [];
  for (let value of Object.values(arry)) {
    let elValue = Object.values(value);
    for (let el of elValue) {
      if (typeof el === 'object') {
        arrayForFilter.push(Object.entries(el).toString())
      }
    arrayForFilter.push(el)
    }
    el = `${elValue},${Object.keys(value)}`
    if (el.includes(filter)) {
      filtered.push(value);
    }
  console.log(arrayForFilter)
  }

return filtered;
}

arrayFilter(objects, 'name', 'Иван')




// export default arrayFilter
