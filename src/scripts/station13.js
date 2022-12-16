function changeBackgroundColor(e) {
  let check = document.getElementById('check')
  let text = document.getElementById('text')
  if (check.checked) {
    text.style.backgroundColor = 'red';
  } else {
    text.style.backgroundColor = null;
  }
}
