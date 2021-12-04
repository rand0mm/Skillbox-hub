(async() => {
  try {
    // 2.1             1.1
    const res = await fetch('http://facebook.com')

    console.log('После получения ответа от Facebook')
    // 3.1              2.2
    const data = await res.json()

    console.log('После получения тела ответа')
  } catch (error) {
    console.log(`Не удалось получить ответа от Facebook: ${error.message}`)
  }
})()

// тоже самое через промис -кетч
fetch('http://facebook.com')
  .then(res => {
    console.log('После получения ответа от Facebook')
    return res.json()
  })
  .then(data => {
    console.log('После получения тела ответа')
  })
  .catch(error => {
    console.log(`Не удалось получить ответа от Facebook: ${error.message}`)
  })
  // 1.2
  console.log('Пытаемся получить главную страницу Facebook...')
