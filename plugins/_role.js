const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Wibu abnormal': 0,
  'Wibu sangean': 10,
  'OmOm/TanteTante Pedo': 20,
  'Kaum tolol warga tiktod': 30,
  'Pecinta Susu admin': 40,
  'Pengocok handal': 50,
  'The king Of bandar Bkp': 60,
  'Master Bandar doujin': 80,
  'Orang yg abnormal': 90
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
