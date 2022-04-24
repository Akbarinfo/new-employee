let elForm = document.querySelector('#form')
let elAddBox = document.querySelector('#addbox')
let elAddNewBtn = document.querySelector('#addnewbtn')
let elAddXbtn = document.querySelector('#addxbtn')
let elReset = document.querySelector('#reset')

//Input
let elInName = document.querySelector('#name')
let elInEmail = document.querySelector('#email')
let elInNumber = document.querySelector('#number')
let elInCity = document.querySelector('#city')
// let elInGender = document.querySelector('#')
let elInDepa = document.querySelector('#depa')
let elInData = document.querySelector('#data')


//error
let NameErr = document.querySelector('#nameerr')
// let NameErr = document.querySelector('#')
// let NameErr = document.querySelector('#')
// let NameErr = document.querySelector('#')
// let NameErr = document.querySelector('#')
// let NameErr = document.querySelector('#')


//createElements

function createElements(...arr) {
  return arr.map(item => {
    return document.createElement(item)
  })
}


//On
elAddNewBtn.addEventListener('click', () => {
  elAddBox.style.display = 'flex'
})

//Off
elAddXbtn.addEventListener('click', () => {
  elAddBox.style.display = 'none'
})

let count = 4

elForm.addEventListener('submit', (e) => {
  e.preventDefault()

  elAddBox.style.display = 'none'

  mysql.push(
    {
      id: count,
      name: elInName.value,
      email: elInEmail.value,
      number: elInNumber.value,
      city: elInCity.value,
      depa: elInDepa.value,
      data: elInData.value
    },
  )
  addInfo()
  count++;
})

elReset.addEventListener('click', () => {
  elInName.value = null
  elInEmail.value = null
  elInNumber.value = null
  elInCity.value = null
  elInData.value = null
  elInDepa.value = null
})