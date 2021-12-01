export function render(data) {
  const container = document.createElement('div')
  container.classList.add('container', 'py-4');
  container.innerHTML = `
    <h1>Детальная информацйия о товаре ${data.data.name}</h1>
    <img src="./edit-card-2-lg.jpg" alt="${data.data.name}" style="max-width: 300px">
    <p class="lead">${data.data.email}</p>
    <p class="display-3">${data.data.gender}</p>
  `;
  return container;
}
