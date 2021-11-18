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

  function text() {
    header.textContent = input.value
  }
  function delay() {
    setTimeout(text, 2000)
  }

  input.addEventListener('input', function(){
    clearTimeout(delay());
    delay();
  })
});
