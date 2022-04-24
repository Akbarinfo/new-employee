let elTbody = document.querySelector('#tbody')

//Display Add
function addInfo() {
  elTbody.innerHTML = null
  mysql.forEach((item) => {
    addInfoDisplay(item)
  })
}

addInfo()

function addInfoDisplay(item){
  let [tr, nametd, mailtd, numtd, depatd, btntd] = createElements('tr', 'td', 'td', 'td', 'td', 'td')

  // elemntlar uchun
  let [editbtn, xbtn, editicon, xicon] = createElements('button', 'button', 'i', 'i')

  tr.className = 'list__tr'
  tr.id = item.id

  //tdlar bilan ishlash
  nametd.className = 'list__td'
  mailtd.className = 'list__td'
  numtd.className = 'list__td'
  depatd.className = 'list__td'
  btntd.className = 'list__td'

  //tdlarga qiymat berish
  nametd.textContent = item.name
  mailtd.textContent = item.email
  numtd.textContent = item.number
  depatd.textContent = item.depa

  //buttonlar bilan ishlash
  editbtn.className = 'list__edit'
  xbtn.className = 'list__xbtn'

  //iconlar bilan ishlash
  editicon.className = 'bx bx-pencil'
  xicon.className = 'bx bx-x'

  editbtn.appendChild(editicon)
  xbtn.appendChild(xicon)

  // editbtn ga quloq qoyib ketish
  editbtn.addEventListener('click', (e) => {
    let ids = editbtn.parentNode.parentNode.id
    edite(ids)
  })

  // Xbtn ga quloq qoyib ketish
  xbtn.addEventListener('click', (e) => {
    let ids = xbtn.parentNode.parentNode.id
    remove(ids)
  })

  btntd.appendChild(editbtn)
  btntd.appendChild(xbtn)

  tr.appendChild(nametd)
  tr.appendChild(mailtd)
  tr.appendChild(numtd)
  tr.appendChild(depatd)
  tr.appendChild(btntd)

  elTbody.appendChild(tr)
}
