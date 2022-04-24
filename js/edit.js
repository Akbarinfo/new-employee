// edit part

let elEdit = document.querySelector('#edit')

function edite(id) {
  elEdit.innerHTML = null
  mysql.forEach((items) => {
    if(items.id == id) {
      let add = document.createElement('div')
      elEdit.style.display = 'flex'
      add.className = 'add__main'

      add.innerHTML = `
      <div class="add__header d-flex justify-content-between align-items-center">
        <h2 class="add__title">Employee From</h2>
        <button class="list__xbtn" id="editaddxbtn"><i class="bx bx-x "></i></button>
      </div>
      <form class="add__form d-flex flex-wrap" action="" id="editform">

        <div class="col-6">
          <label class="add__label" for="editname">
            <input class="add__input" value="${items.name}" type="text" id="editname" placeholder="Full Name">
            <span class="add__err" id="nameerr"></span>
          </label>
          <label class="add__label" for="editemail">
            <input class="add__input" type="text" value="${items.email}"  id="editemail" placeholder="Email">
            <span class="add__err" id=""></span>
          </label>
          <label class="add__label" for="editnumber">
            <input class="add__input" value="${items.number}" type="number" id="editnumber" placeholder="Mobile">
            <span class="add__err" id=""></span>
          </label>
          <label class="add__label" for="editcity">
            <input class="add__input" value="${items.city}" type="text" id="editcity" placeholder="City">
            <span class="add__err" id=""></span>
          </label>
        </div>

        <div class="col-6">
          <div class="add__gender">
            <p class="add__name">Gender</p>
            <div class="d-flex align-items-center">
              <input class="add__radio" type="radio" id="male" name="gender" value="male">
              <label class="add__label" for="male">Male</label>
              <input class="add__radio" type="radio" id="female" name="gender" value="female">
              <label class="add__label" for="female">Female</label>
              <input class="add__radio" type="radio" id="other" name="gender" value="other">
              <label class="add__label" for="other">Other</label>
            </div>
          </div>
          <label class="add__label" for="editdepa">
            <select class="add__input" value="" name="" id="editdepa">
              <option value="${items.depa}">${items.depa}</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
              <option value="accounting">Accounting</option>
              <option value="hr">Hr</option>
            </select>
          </label>
          <label class="add__label" for="editdata">
            <input class="add__input" value="${items.data}" type="date" id="editdata" placeholder="Apr/22/2022">
          </label>
          <div class="d-flex align-items-center ps-2 pt-3 pb-3">
            <input type="checkbox" id="check" name="check" value="check">
            <label class="add__check" for="check"> Permanent Employee</label><br>
          </div>
          <div class="d-flex pt-2 pb-2">
            <button class="add__submit" type="submit">Submit</button>
            <button class="add__reset" type="button" id="editReset">Reset</button>
          </div>

        </div>
      </form>
      `
      elEdit.appendChild(add)
      let u = document.querySelector('#editform')
      document.querySelector('#editaddxbtn').addEventListener('click', (e) => {
        elEdit.style.display = 'none'
      })

      document.querySelector('#editReset').addEventListener('click', (e) => {
         //Input
        document.querySelector('#editname').value = null
        document.querySelector('#editemail').value = null
        document.querySelector('#editnumber').value = null
        document.querySelector('#editcity').value = null
        document.querySelector('#editdepa').value = null
        document.querySelector('#editdata').value = null
      })

      editForm(u, items)
    }
  })
}


function editForm(ue, items) {
  ue.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('salom')

    //Input
    let elInName = document.querySelector('#editname')
    let elInEmail = document.querySelector('#editemail')
    let elInNumber = document.querySelector('#editnumber')
    let elInCity = document.querySelector('#editcity')
    let elInDepa = document.querySelector('#editdepa')
    let elInData = document.querySelector('#editdata')

    items.name = elInName.value
    items.email = elInEmail.value
    items.number = elInNumber.value
    items.city = elInCity.value
    items.data = elInData.value
    items.depa = elInDepa.value
    console.log(elInName.value)

    elEdit.style.display = 'none'
    addInfo()
  })
}
