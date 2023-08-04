const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

btn.addEventListener('click', function() {
  output.innerHTML = 'Hello ' + document.querySelector('#name').value + '!';
});
