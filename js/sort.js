//Sortlash
let elName = document.querySelector('#namebtn')
let elMail = document.querySelector('#mailbtn')
let elNum = document.querySelector('#numbtn')
let elDepa = document.querySelector('#depabtn')

//Sort icon
let elNameIcon = document.querySelector('#nameicon')
let elMailIcon = document.querySelector('#mailicon')
let elNumIcon = document.querySelector('#numicon')
let elDepaIcon = document.querySelector('#depaicon')

//Sortlash part
let n = 0
elName.addEventListener('click', () => {
  console.log(elNameIcon)

  if(n == 0) {
    n++
    elNameIcon.className = 'bx bx-arrow-from-top list__ticon'
    mysql.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
    addInfo()

  }
  else
  {
    elNameIcon.className = 'bx bx-arrow-from-bottom list__ticon'
    n = 0
    mysql.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    addInfo()

  }
})


let e = 0
elMail.addEventListener('click', () => {

  if(e == 0) {
    e++
    elMailIcon.className = 'bx bx-arrow-from-top list__ticon'
    mysql.sort((a, b) => {
      if (a.email < b.email) {
        return 1;
      }
      if (a.email > b.email) {
        return -1;
      }
      return 0;
    })
    addInfo()
  }
  else
  {
    elMailIcon.className = 'bx bx-arrow-from-bottom list__ticon'
    e = 0
    mysql.sort((a, b) => {
      if (a.email > b.email) {
        return 1;
      }
      if (a.email < b.email) {
        return -1;
      }
      return 0;
    })
    addInfo()

  }
})


let nu = 0
elNum.addEventListener('click', () => {

  if(nu == 0) {
    nu++
    elNumIcon.className = 'bx bx-arrow-from-top list__ticon'
    mysql.sort((a, b) => {
      if (a.number < b.number) {
        return 1;
      }
      if (a.number > b.number) {
        return -1;
      }
      return 0;
    })
    addInfo()
  }
  else
  {
    elNumIcon.className = 'bx bx-arrow-from-bottom list__ticon'
    nu = 0
    mysql.sort((a, b) => {
      if (a.number > b.number) {
        return 1;
      }
      if (a.number < b.number) {
        return -1;
      }
      return 0;
    })
    addInfo()
  }
})

let d = 0
elDepa.addEventListener('click', () => {

  if(d == 0) {
    d++
    elDepaIcon.className = 'bx bx-arrow-from-top list__ticon'
    mysql.sort((a, b) => {
      if (a.depa < b.depa) {
        return 1;
      }
      if (a.depa > b.depa) {
        return -1;
      }
      return 0;
    })
    addInfo()
  }
  else
  {
    elDepaIcon.className = 'bx bx-arrow-from-bottom list__ticon'
    d = 0
    mysql.sort((a, b) => {
      if (a.depa > b.depa) {
        return 1;
      }
      if (a.depa < b.depa) {
        return -1;
      }
      return 0;
    })
    addInfo()
  }
})
