//delete part

function remove(e) {
  mysql.forEach((id) => {
    if(e == id.id) {
      mysql = mysql.filter(item => item !== id);
    }
    addInfo()
  })
}
