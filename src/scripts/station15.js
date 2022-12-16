function displayList(params) {
  const fruits = document.getElementById('fruits')
  const ul = document.createElement('ul')

  for (var i = 0; i < fruits.childElementCount; i++) {
    let li = document.createElement('li')
    li.textContent = fruits.children[i].textContent
    ul.appendChild(li)
  }
  fruits.replaceChildren(ul)
}

