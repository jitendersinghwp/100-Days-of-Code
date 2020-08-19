
document.body.addEventListener("keydown", event => {
  console.log(event);
  event.preventDefault();
  var eventWhichSelectors = document.querySelectorAll('.eventWhich span');

  for (var i = 0; i < eventWhichSelectors.length; i++) {
    eventWhichSelectors[i].textContent = event.which;
}

  document.querySelector('#eventKey span').textContent = event.key;
  document.querySelector('#eventCode span').textContent = event.code;
});