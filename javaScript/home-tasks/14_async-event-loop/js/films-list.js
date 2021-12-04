export function render(data, callback) {

  const container = document.createElement('div')
  container.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'flex-wrap',
    'py-4'
  )
  data.results.forEach(function(item, index){
    const itemCard = document.createElement('div')
    const image = document.createElement('img')
    const cardBody = document.createElement('div')
    const title = document.createElement('h5')
    const detailsButton = document.createElement('a')

    itemCard.style.width = '32%'
    itemCard.classList.add('card', 'my-2', 'bg-transparent', 'position-relative')
    image.classList.add('card-img-top', 'rounded')
    cardBody.classList.add('card-body')
    title.classList.add('card-title', 'text-warning', 'text-center')
    detailsButton.classList.add('btn', 'bg-transparent', 'position-absolute', 'top-0', 'start-0', 'bottom-0', 'end-0');

    itemCard.append(image)
    itemCard.append(cardBody)
    itemCard.append(detailsButton)
    cardBody.append(title)
    title.textContent = item.title;
    document.body.style.background = `url(./img/bg.jpg)`;
    document.body.style.backgroundSize = `cover`
    image.src = `./img/ep-${item.episode_id}.jpg`;
    image.alt = item.title;
    detailsButton.textContent = 'Подробнее'
    detailsButton.href = `?itemId=${index + 1}`;

    detailsButton.addEventListener('click', e =>{
      e.preventDefault()
      history.pushState(null, '', `${detailsButton.href}`)
      callback();
    })
    container.append(itemCard)
  })

  return container;

}
