//Search part

let elSearch = document.querySelector('#search')

elSearch.addEventListener('keyup', (e) => {
  let key = e.key
  elTbody.innerHTML = null
  mysql.forEach((item) => {
    if(item.name.includes(key)) {
      addInfoDisplay(item)
    }
  })
})