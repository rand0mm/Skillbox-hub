document.addEventListener('DOMContentLoaded', function() {
  const div = document.createElement('div');
  const header = document.createElement('h2');
  const input = document.createElement('input');

  document.body.append(div);
  div.append(input);
  div.append(header);
  div.classList.add('container');
  input.classList.add('input');
  header.classList.add('header');

  function delay() {
    setTimeout(function() {
      header.textContent = input.value
    }, 2000)
  }

  input.addEventListener('input', function(){
    clearTimeout(delay());
    delay();
  })
});
