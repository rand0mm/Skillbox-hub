const appContainer = document.getElementById('app')
const cssPromises = {}

//определение запроса и загрузка
function loadResource(src) {
  // JavaScript module
  if (src.endsWith('.js')) {
    return import(src);
  }
  // CSS файл
  if (src.endsWith('.css')) {
    if(!cssPromises[src]) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = src;
      cssPromises[src] = new Promise(resolve => {
        link.addEventListener('load', () => resolve())
      });
      document.head.append(link)
    }
    return cssPromises[src]
  }
  // Данные сервера
  return fetch(src).then(res => res.json())
}
// Ожидание загрузки данных и отприсовка страница функцией из двух разных файлов на выбор "pageNodule" + "render"
function renderPage(moduleName, appUrl,css) {
  Promise.all(  [moduleName, appUrl, css]
    .map(src => loadResource(src))).then(([pageModule, itemData]) => {
    appContainer.innerHTML = ''
    // передача функции как агрумента для функции отрисовки с последющим вызовом оной в событии кнопок
    appContainer.append(pageModule.render(itemData, loadPage))
  });
}

// перерисовка на основе текущего Url
function loadPage() {
  const searchParams = new URLSearchParams(location.search)
  const itemId = searchParams.get('itemId')
  if(itemId) {
    renderPage(
      './films-details.js',
      `https://swapi.dev/api/films/${itemId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
    );
  } else {
    renderPage(
      './films-list.js',
      'https://swapi.dev/api/films/',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
    );
  }
}

loadPage();

window.addEventListener('popstate', loadPage)


