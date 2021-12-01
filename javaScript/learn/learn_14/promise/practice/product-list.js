export function render(data) {
  /*
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  */
  const container = document.createElement('div')
  container.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'flex-wrap',
    'py-4'
  )

  for (const product of data.data) {
    const productCard = document.createElement('div')
    const image = document.createElement('img')
    const cardBody = document.createElement('div')
    const title = document.createElement('h5')
    const price = document.createElement('p')
    const detailsButton = document.createElement('a')

    productCard.style.width = '18%'
    productCard.classList.add('card', 'my-2')
    image.classList.add('card-img-top')
    cardBody.classList.add('card-body')
    title.classList.add('card-title')
    price.classList.add('card-text')
    detailsButton.classList.add('btn', 'btn-primary');

    productCard.append(image)
    productCard.append(cardBody)
    cardBody.append(title)
    cardBody.append(price)
    cardBody.append(detailsButton)

    image.src = './edit-card-2-lg.jpg';
    image.alt = product.name;
    title.textContent = product.name;
    price.textContent = product.gender
    detailsButton.textContent = 'Подробнее'
    detailsButton.href = `?productId=${product.id}`;

    container.append(productCard)
  }

  return container;

}
