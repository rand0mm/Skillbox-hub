async function getUser(id) {
  const res = await fetch(`https://gorest.co.in/public-api/users/${id}`)
  const data = await res.json();
  if (data.code !== 200) {
    const error = new Error('Не удалось получить объект пользователя из API')
    error.statusCode = data.code
    throw error;
  }
  return data.data;
}

getUser(7).then(user => console.log(user))
getUser('adsadsadas')
  .then(user => console.log(user))
  .catch(error => console.log(`Не удалось получить пользователя, код ошибки: ${error.statusCode}`))
