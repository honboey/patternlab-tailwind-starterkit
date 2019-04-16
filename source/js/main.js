document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  welcome();
});

function welcome () {
  var element = document.querySelector('.welcome');
  console.log('welcome', element);
  if (element !== null && element !== undefined) {
    element.addEventListener('mouseover', function (e) {
      e.target.innerHTML = 'Click me!';
    });
    element.addEventListener('mouseleave', function (e) {
      e.target.innerHTML = 'Welcome!';
    });
    element.addEventListener('click', function (e) {
      window.location.href = 'https://patternlab.io/docs/';
    });
  }
}