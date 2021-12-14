/* eslint-disable import/extensions */
// отрисовка списка
export default function render(data) {
  const container = document.createElement('div');
  const title = document.getElementById('title');

  if (typeof data === 'undefined') {
    title.textContent = 'Что-то пошло не так...';
    return;
  }

  if (data === null) {
    title.textContent = 'Что-то пошло не так...';
    return;
  }

  if (data.error) {
    title.textContent = 'Что-то пошло не так...';
    return;
  }

  if (!data.products.length) {
    title.textContent = 'Список товаров пуст';
    return;
  }

  title.textContent = 'Список товаров:';

  container.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'flex-wrap',
    'py-4',
  );

  data.products.forEach((item, index) => {
    const itemCard = document.createElement('div');
    const cardBody = document.createElement('div');
    const btnGroup = document.createElement('div');
    const image = document.createElement('img');
    const caption = document.createElement('h5');
    const price = document.createElement('p');

    itemCard.style.width = '24%';
    itemCard.classList.add(
      'card',
      'my-2',
      'bg-transparent',
      'position-relative',
      'shadow',
      'bg-body',
      'rounded',
    );
    cardBody.classList.add('card-body');
    btnGroup.classList.add('btn-group', 'justify-content-center', 'position-relative');
    image.classList.add('card-img-top', 'rounded');
    caption.classList.add('card-title', 'text-center');
    price.classList.add('text-center');

    btnGroup.id = `card-${index + 1}`;
    btnGroup.style.height = '38px';

    itemCard.append(image);
    itemCard.append(cardBody);
    cardBody.append(caption);
    cardBody.append(price);
    itemCard.append(btnGroup);
    price.textContent = item.price;
    caption.textContent = item.name;
    image.src = item.image;
    image.alt = item.name;

    container.append(itemCard);
  });
  // eslint-disable-next-line consistent-return
  return container;
}
