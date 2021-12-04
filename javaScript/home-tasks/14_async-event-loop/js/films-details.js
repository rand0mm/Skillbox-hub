export function render(data, callback) {
  const container = document.createElement('div')

  // запрос на массив url + создание списка из массива
  function renderListOfProperty(src, listName) {
    const root = document.createElement('div')
    const h2 = document.createElement('h2')
    const ul = document.createElement('ul')
    h2.classList.add('card-title', 'text-warning')
    ul.classList.add('list-group', 'list-group-horizontal', 'text-warning', 'flex-wrap')
    h2.textContent = listName
    Promise.all(src.map(src => fetch(src).then(res => res.json()))).then(data => {
      data.map(item => {
        const li = document.createElement('li')
        li.classList.add('list-group-item', 'text-warning', 'bg-transparent')
        li.textContent = item.name
        ul.append(li)
      })
      const cardBody = document.querySelector('.card-body')
      root.append(h2)
      root.append(ul)
      cardBody.append(root)
      return data;
    })
  }

  document.body.style.background = `url(./img/bg.jpg)`;
  container.classList.add('container', 'py-4', 'text-warning');
  container.innerHTML = `
  <div class="card mb-3 bg-transparent" style="max-width: 1024px; ">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="./img/ep-${data.episode_id}.jpg" class="img-fluid rounded-start" alt="${data.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Episode:${data.episode_id} ${data.title}</h5>
          <p class="card-text">${data.opening_crawl}</p>
        </div>
      </div>
    </div>
  </div>
  `;

  // создание goback кнопки
  const goBackBtn = document.createElement('a')
  goBackBtn.classList.add('btn', 'bg-transparent', 'text-warning');
  goBackBtn.textContent = 'Back to Episodes'
  goBackBtn.href = `index.html`;

  goBackBtn.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, '', `${goBackBtn.href}`)
    callback();
  })

  container.append(goBackBtn)


  renderListOfProperty(data.planets, 'Planets')
  renderListOfProperty(data.species, 'Species')

  return container;
}
