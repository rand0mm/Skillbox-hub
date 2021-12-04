const form = document.getElementById('user-create-form')

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {};

  for (let i = 0; i < form.elements.length; ++i) {
    const input = form.elements[i];
    if (!input.name) continue;
    data[input.name] = input.value;
  }

  fetch('https://gorest.co.in/public/v1/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer e264ce3a561a99d90ca613509701c7748dbc6fa7013ea0bb1c70b91ae57f8eb6'
    },
  })
})
