// 1*

function reliability (password) {
  if (password.length > 3 && (password.includes('-') || password.includes('_'))) {
    console.log(password + ' Пароль надежный')
  } else {
    console.log(password + ' Пароль недостаточно надёжный')
  }
}

reliability('1234-')
reliability('4321_')
reliability('qaz-xsw')
reliability('_zxd')

reliability('_-a')
reliability('qaz')
reliability('_-3')
reliability('123456789')

// 2*

function normalizer (name, surname) {
  name = !name ? name : name[0].toUpperCase() + name.slice(1).toLowerCase()
  console.log('Имя:', name)
  surname = !surname ? surname : surname[0].toUpperCase() + surname.slice(1).toLowerCase()
  console.log('Фамилия:', surname)
}

normalizer('алЕкСей', 'аЛеКсЕеВ')
