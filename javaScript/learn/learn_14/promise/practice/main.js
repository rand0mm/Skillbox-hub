const cssPromises = {}

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

const appContainer = document.getElementById('app')
const searchParams = new URLSearchParams(location.search)

const productId = searchParams.get('productId')

function renderPage(moduleName, apuUrl, css) {
  Promise.all(  [moduleName, apuUrl,css]
    .map(src => loadResource(src))).then(([pageModule, data]) => {
    appContainer.innerHTML = ''
    appContainer.append(pageModule.render(data))
  });
}

if(productId) {
  renderPage(
    './product-details.js',
    `https://gorest.co.in/public/v1/users/${productId}`,
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
  );
} else {
  renderPage(
    './product-list.js',
    'https://gorest.co.in/public/v1/users',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
  );
}

