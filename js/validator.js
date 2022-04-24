let addBtn = document.querySelector('#addbtn')

//error
let NameErr = document.querySelector('#nameerr')
let MailErr = document.querySelector('#mailerr')
let NumberErr = document.querySelector('#numerr')
let DepaErr = document.querySelector('#depaerr')


let counts = 0
let checkeds = false
elInName.addEventListener('keyup', (e) => {
  let keys = e.key;
  try {
    if(keys.match(/[0-9]/) == null) {
     elInName.className = 'add__input add__checke'
      NameErr.className = 'add__errchecke'
      NameErr.textContent = ''
      checkeds = true
      ++counts

    }
    else if(elInName.value == 0) {
      elInName.className = 'add__input add__bag'
       NameErr.className = 'add__err'
       throw '* You did not enter anything'
    }
    else {
      elInName.className = 'add__input add__bag'
      NameErr.className = 'add__err'
      throw '* Numbers cannot be entered in the login'
    }

  } catch(e) {
    NameErr.textContent = e
    checkeds = false
  }
})

elInEmail.addEventListener('keyup', (e) => {
  let keys = e.key;
  let key = elInEmail.value
  try{
    if(key.includes('@') && key.includes('.')) {
      elInEmail.className = 'add__input add__checke'
      MailErr.className = 'add__errchecke'
      MailErr.textContent = ''
      checkeds = true
      ++counts

    }
    else if(keys.length == 0) {
      elInEmail.className = 'add__input add__bag'
      MailErr.className = 'add__err'
      throw '* You did not enter anything'
    }

    else {
      elInEmail.className = 'add__input add__bag'
      MailErr.className = 'add__err'
      throw `* Please include an '@' and '.' the email address.`
    }
  }
  catch(e) {
    MailErr.textContent = e
    checkeds = false
  }
})

elInNumber.addEventListener('keyup', (e) => {
  let key = elInNumber.value
  let num = +key.slice(1, 13)
  try {
    if(key.length == 0) {
      elInNumber.className = 'add__input add__bag'
      NumberErr.className = 'add__error add__errbag'
      throw '* You did not enter anything'
    }
    else if(key.length != 13) {
      elInNumber.className = 'add__input add__bag'
      NumberErr.className = 'add__error add__err'
      throw '* You did not enter the full number'
    }
    else if(+num && key[0] == '+') {
      elInNumber.className = 'add__input add__checke'
      NumberErr.className = 'add__error add__errchecke'
      NumberErr.textContent = ''
      checkeds = true
      ++counts

    }
    else {
      elInNumber.className = 'add__input add__bag'
      NumberErr.className = 'add__error add__err'
      throw '* Characters cannot be entered in the number'
    }
  } catch(e) {
    NumberErr.textContent = e
    checkeds = false
  }
})

elInDepa.addEventListener('click', (e) => {
  let key = elInDepa.value

  console.log(key)
  try {
    if(key == "Development" || key == "Marketing" || key == "Accounting" || key == "Hr") {
      elInDepa.className = 'add__input add__checke'
      DepaErr.className = 'add__error add__errchecke'
      DepaErr.textContent = ''
      checkeds = true

      console.log(counts)
      console.log(checkeds)
      if(counts >= 3 && checkeds) {
        addBtn.removeAttribute('disabled')
      }
    }
    else {
      elInDepa.className = 'add__input add__bag'
      DepaErr.className = 'add__error add__err'
      throw 'This field is required.'
    }
  } catch(e) {
    DepaErr.textContent = e
    checkeds = false
  }
})
