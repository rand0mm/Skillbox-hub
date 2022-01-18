const container = document.querySelector('.container')
const form = document.querySelector('.form');
const input = form.querySelector('.form-control')

// создание массива прототипов объекта
function getProtoArray(obj, arr) {
  console.log(obj)
  let name = obj.name === '' ? 'Object' : obj.name;
  let constructorName = obj.constructor.name === '' ? obj.constructor.name : 'Без названия'
  let proto = Object.getPrototypeOf(obj);
  if (proto) {
    let methods = Object.keys(obj)
    let methodsTypes = methods.map(e => {
      return `${e} typeof: ${typeof obj[e]}`
      })
    let item = {
      name: name,
      constructorName: constructorName,
      methods: methodsTypes,
    }
    arr.push(item)
    return getProtoArray(proto, arr)
  }  else {
    return arr;
  }
}

form.addEventListener('submit', async (el) => {
  el.preventDefault();
  let data = [];
  let className = input.value;

  // код для модулей
  if(className.endsWith('js')) {
    try {
      let module = await import(`./${className}`)
      let obj = module.default;
      console.log(obj)
      input.classList.remove('is-invalid')
      getProtoArray(obj, data)
      container.append(render(data))
      return;
    } catch (error) {
      console.log(error.message)
      input.classList.add('is-invalid')
      return;
    }
  }

  // код для имен классов
  if(typeof window[className] === 'function') {
    input.classList.remove('is-invalid')
    let obj =  window[input.value]
    getProtoArray(obj, data)

  } else {
    input.classList.add('is-invalid')
  }
  const ol = container.querySelector('.list-group')
  if(ol) ol.remove();
  if(data.length > 0) container.append(render(data))
})

// отрисовка списков
function render(data) {
  const ol = document.createElement('ol');
  ol.classList.add('list-group', 'list-group-numbered')


  data.forEach(e => {
    const li = document.createElement('li');
    const liContaier = document.createElement('div')
    const caption = document.createElement('div');

    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'flex-wrap', 'col-7', 'border-0')
    liContaier.classList.add('ms-2', 'me-auto')
    caption.classList.add('fw-bold')

    liContaier.style.width = '95%';
    caption.textContent = `${e.name} конструктор: ${e.constructorName}`;

    liContaier.append(caption)
    li.append(liContaier)
    ol.append(li)

    if(e.methods.length > 0) {
      const ol = document.createElement('ol');
      ol.classList.add('list-group', 'list-group-numbered')

      e.methods.forEach( el => {
        const li = document.createElement('li');
        const caption = document.createElement('div');
        const liContaier = document.createElement('div')

        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0')
        liContaier.classList.add('ms-2', 'me-auto')
        caption.classList.add('fw-bold')
        caption.textContent = el;

        liContaier.append(caption)
        li.append(liContaier)
        ol.append(li)
      })

      li.append(ol)
    }
  })


  return ol;

}

