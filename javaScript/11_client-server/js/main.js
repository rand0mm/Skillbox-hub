const navGroup = document.querySelectorAll('.btn-group');
let dataArray = null;
let listArray = null;
let paginationLast;
let page = 1;

async function loadTodoItems () {
  const response = await fetch('https://gorest.co.in/public-api/posts');
  const data = await response.json();
  return data;
}
const pageParams = new URLSearchParams(window.location.search);
if (pageParams.get('page')) {
  page = pageParams.get('page');
}
async function makeNav (page) {
  const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
  const data = await response.json();
  dataArray = data;
  const pagination = dataArray.meta.pagination.page;
  paginationLast = dataArray.meta.pagination.pages;
  const x = [];
  if (pagination < 5) {
    for (let i = pagination - 5; i < 11 && i <= paginationLast; i++) {
      if (i < 1) {
        continue;
      }
      x.push(i);
    }
  } else if (pagination > paginationLast - 7) {
    for (let i = pagination - (9 - (paginationLast - pagination)); i <= paginationLast; i++) {
      x.push(i);
    }
  } else {
    for (let i = pagination - 4; i < (pagination + 6) && i <= paginationLast; i++) {
      x.push(i);
    }
  }
  const lists = document.querySelectorAll('.nav__list');
  lists.forEach(e => {
    e.innerHTML = '';
    x.forEach(el => {
      const listItem = document.createElement('li');
      const listItemLink = document.createElement('a');
      listItemLink.textContent = el;
      listItemLink.href = `index.html?page=${el}`;
      listItemLink.classList.add('link-reset');
      listItem.classList.add('nav__item');
      if (el === pagination) {
        listItem.classList.add('nav__item--active');
      }
      listItem.append(listItemLink);
      e.append(listItem);
    });
  });
  const nextBtns = document.querySelectorAll('.btn-next');
  const prevBtns = document.querySelectorAll('.btn-prev');
  if (page === '1') {
    prevBtns.forEach(e => {
      e.setAttribute('disabled', 'disabled');
    });
  }
  if (page === `${paginationLast}`) {
    nextBtns.forEach(e => {
      e.setAttribute('disabled', 'disabled');
    });
  }
}

async function makeList (page) {
  const list = document.querySelector('.articles__list');
  const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
  const data = await response.json();
  listArray = data.data;
  listArray.forEach(e => {
    const listItem = document.createElement('li');
    const listItemLink = document.createElement('a');
    listItemLink.href = `post.html?id=${e.id}`;
    listItemLink.textContent = `${e.title}`;
    listItemLink.classList.add('link-reset', 'articles__link');
    listItem.classList.add('articles__item');
    listItem.append(listItemLink);
    list.append(listItem);
  });
}

navGroup.forEach(e => {
  e.addEventListener('click', e => {
    const target = e.target.closest('.btn');
    if (target.disabled) {
      return;
    }
    if (target.id.includes('first-page')) {
      page = 1;
      document.location.href = `index.html?page=${page}`;
      return page;
    }

    if (target.id.includes('last-page')) {
      page = paginationLast;
      document.location.href = `index.html?page=${page}`;
      return page;
    }
    if (target.id.includes('prev-page')) {
      page -= 1;
      document.location.href = `index.html?page=${page}`;
      return page;
    }
    if (target.id.includes('next-page')) {
      page += 1;
      document.location.href = `index.html?page=${page}`;
      return page;
    }
    return page;
  });
});

async function makePost () {
  const pageParams = new URLSearchParams(window.location.search);
  const postId = pageParams.get('id');
  const postBox = document.querySelector('.post');
  const response = await fetch(`https://gorest.co.in/public-api/posts/${postId}`);
  const Data = await response.json();
  const postData = Data.data;
  const commentsResp = await fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`);
  const commentsData = await commentsResp.json();
  const comments = commentsData.data;
  console.log(comments);
  const backToList = document.createElement('a');

  backToList.textContent = 'Back to list';
  backToList.href = `index.html?page=${page}`;
  backToList.classList.add('link-reset', 'back-to-list');
  const postTitle = document.createElement('h1');
  const postContentText = document.createElement('p');
  postTitle.textContent = `${postData.title}`;
  postContentText.textContent = `${postData.body}`;
  postTitle.classList.add('title', 'post-title');
  postContentText.classList.add('text', 'post-text');
  postBox.append(backToList);
  postBox.append(postTitle);
  postBox.append(postContentText);

  if (comments.length > 0) {
    const commentsBox = document.createElement('div');
    const commentsBoxTitle = document.createElement('h2');
    commentsBoxTitle.classList.add('comments-title', 'title');
    commentsBoxTitle.textContent = 'Comments:';
    const commentsList = document.createElement('ul');
    commentsList.classList.add('post__comments__list', 'list-reset');
    commentsBox.classList.add('post__comments');
    commentsBox.append(commentsBoxTitle);
    commentsBox.append(commentsList);
    comments.forEach(e => {
      const commentsItem = document.createElement('li');
      commentsItem.classList.add('post__comments__Item');
      const commentUserName = document.createElement('h3');
      const commentTextContent = document.createElement('p');
      commentUserName.classList.add('post__comments__title', 'title');
      commentTextContent.classList.add('post__comments__text', 'text');
      commentUserName.textContent = e.name + ':';
      commentTextContent.textContent = e.body;
      commentsItem.append(commentUserName);
      commentsItem.append(commentTextContent);
      commentsList.append(commentsItem);
    });
    postBox.append(commentsBox);
  }
}
