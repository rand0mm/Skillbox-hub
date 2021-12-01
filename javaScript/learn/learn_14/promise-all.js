// использование асинк-эвейт
async function fetchJson (url) {
  const res = await fetch(url)
  return await res.json()
}

async function getPostData(id) {
  const post = await fetchJson(`/api/posts/${id}`)
  const comments = await fetchJson(`/api/posts/${id}/comments`)
  const profile = await fetchJson('/api/profile')
  return { post, comments, profile }
}

// использование Promise.all
async function fetchJsonB(url) {
  const res = await fetch(url)
  return await res.json()
}

async function getPostDataB(id) {
  const { post, comments, profile } = await Promise.all([
    fetchJsonB(`/api/posts/${id}`),
    fetchJsonB(`/api/posts/${id}/comments`),
    fetchJsonB('/api/profile')
  ])
  return { post, comments, profile }
}

// без асинк-эвейт
function fetchJsonC (url) {
  return fetch(url).then(res => res.json())
}

function getPostDataC(id) {
  return Promise.all([
    fetchJsonC(`/api/posts/${id}`),
    fetchJsonC(`/api/posts/${id}/comments`),
    fetchJsonC('/api/profile')
  ]).then(([post, comments, profile]) => {
    return { post, comments, profile }
  })
}

(async () => {
  const data = await getPostDataC(1)
})()
