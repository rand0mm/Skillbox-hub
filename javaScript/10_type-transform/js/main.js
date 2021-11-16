const dataArr = [
  {
    name: 'Алексей',
    surname: 'Борисов',
    middleName: 'Владимирович',
    dobDate: new Date('October 19, 1994 03:24:00'),
    educStart: 2017,
    faculty: 'ФАИ',
    get dob () {
      return this.dobDate.toLocaleDateString();
    },
    get fullName () {
      return `${this.surname} ${this.name} ${this.middleName}`;
    },
    get age () {
      const today = new Date();
      let thisYear = 0;
      if (today.getMonth() < this.dobDate.getMonth()) {
        thisYear = 1;
      } else if ((today.getMonth() === this.dobDate.getMonth()) && today.getDate() < this.dobDate.getDate()) {
        thisYear = 1;
      }
      const age = today.getFullYear() - this.dobDate.getFullYear() - thisYear;
      return age;
    }

  },
  {
    name: 'Борис',
    surname: 'Борисов',
    middleName: 'Владимирович',
    dobDate: new Date('October 19, 1995 03:24:00'),
    get dob () {
      return this.dobDate.toLocaleDateString();
    },
    educStart: 2008,
    faculty: '‎ЗФ',
    get fullName () {
      return `${this.surname} ${this.name} ${this.middleName}`;
    },
    get age () {
      const today = new Date();
      let thisYear = 0;
      if (today.getMonth() < this.dobDate.getMonth()) {
        thisYear = 1;
      } else if ((today.getMonth() === this.dobDate.getMonth()) && today.getDate() < this.dobDate.getDate()) {
        thisYear = 1;
      }
      const age = today.getFullYear() - this.dobDate.getFullYear() - thisYear;
      return age;
    }
  },
  {
    name: 'Владимир',
    surname: 'Алекссев',
    middleName: 'Владимирович',
    dobDate: new Date('October 19, 1996 03:24:00'),
    get dob () {
      return this.dobDate.toLocaleDateString();
    },
    educStart: 2018,
    faculty: '‎ФГСНиП',
    get fullName () {
      return `${this.surname} ${this.name} ${this.middleName}`;
    },
    get age () {
      const today = new Date();
      let thisYear = 0;
      if (today.getMonth() < this.dobDate.getMonth()) {
        thisYear = 1;
      } else if ((today.getMonth() === this.dobDate.getMonth()) && today.getDate() < this.dobDate.getDate()) {
        thisYear = 1;
      }
      const age = today.getFullYear() - this.dobDate.getFullYear() - thisYear;
      return age;
    }
  }
];

const addForm = document.querySelector('.form');
const addFormInputs = addForm.querySelectorAll('.addForm-input');
const tableBox = document.querySelector('.table__main');
const tableSort = document.querySelector('.table__header');
const tableSortArr = document.querySelectorAll('.table__sort');
const filterInputs = Array.from(document.querySelectorAll('.input-filter'));
const clearFilter = document.querySelector('.btn-filter');
let unsortedArr = dataArr.slice();
let sorted = 0;
let sorterName = '';
let filterKeys = ['', '', '', ''];
let timeOut;
let globalSortedArr;

function saveLocalStorage () {
  const savedDataArr = dataArr.slice();
  return savedDataArr;
}

const constructorArr = function (sortStatus, sortedDataArr) {
  const sortedMainArr = [];
  const mainArr = [];
  if (sortStatus === 0) {
    for (const el of unsortedArr) {
      const row = `${el.fullName}/${el.faculty}/${el.dob} (${el.age} лет)/${getEducYears(el.educStart)}`;
      mainArr.push(row);
    }
    return mainArr;
  } else if (sortStatus === 1 || sortStatus === 2) {
    for (const el of sortedDataArr) {
      const row = `${el.fullName}/${el.faculty}/${el.dob} (${el.age} лет)/${getEducYears(el.educStart)}`;
      sortedMainArr.push(row);
    }
    return sortedMainArr;
  } else {

  }
};
const sortBy = (field, reverse, primer) => {
  const key = primer
    ? function (x) {
      return primer(x[field]);
    }
    : function (x) {
      return x[field];
    };

  reverse = !reverse ? 1 : -1;

  return function (a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  };
};

const sort = function (event) {
  const target = event.target;
  let primer;
  if (!target.matches('.table__sort') || target.matches('.table__sort--number')) {
    return;
  }
  sorted = sorterName === `${target.id}` ? sorted : 0;
  if (target.id === 'fullName' || target.id === 'faculty') {
    primer = (a) => a.toUpperCase();
  } else if (target.id === 'educStart' || target.id === 'age') {
    primer = parseInt;
  }
  if (sorted === 0) {
    sorterName = `${target.id}`;
    tableSortArr.forEach(function (item) {
      setTimeout(() => {
        item.closest('.table__sort').classList.remove('table__sort--icon-down');
      }, 300);
      item.closest('.table__sort').classList.remove('table__sort--active');
    });
    target.closest('.table__sort').classList.add('table__sort--active');
    sorted = 1;
    const arrplus = dataArr;
    if (savedDataArr.length > 0) {
      const sortedDataArr = savedDataArr.sort(sortBy(`${target.id}`, true, primer));
      globalSortedArr = sortedDataArr;
      makeTable(constructorArr(sorted, sortedDataArr));
    } else {
      const sortedDataArr = dataArr.sort(sortBy(`${target.id}`, true, primer));
      globalSortedArr = sortedDataArr;
      makeTable(constructorArr(sorted, sortedDataArr));
    }
    return sorted;
  } else if (sorted === 1) {
    sorterName = `${target.id}`;
    tableSortArr.forEach(function (item) {
      setTimeout(() => {
        item.closest('.table__sort').classList.remove('table__sort--icon-down');
      }, 300);
      item.closest('.table__sort').classList.remove('table__sort--active');
    });
    setTimeout(() => {
      target.closest('.table__sort').classList.add('table__sort--icon-down');
    }, 300);
    target.closest('.table__sort').classList.add('table__sort--active');
    sorted = 2;
    if (savedDataArr.length > 0) {
      const sortedDataArr = savedDataArr.sort(sortBy(`${target.id}`, false, primer));
      globalSortedArr = sortedDataArr;
      makeTable(constructorArr(sorted, sortedDataArr));
    } else {
      const sortedDataArr = dataArr.sort(sortBy(`${target.id}`, false, primer));
      globalSortedArr = sortedDataArr;
      makeTable(constructorArr(sorted, sortedDataArr));
    }
    return sorted;
  } else if (sorted === 2) {
    tableSortArr.forEach(function (item) {
      setTimeout(() => {
        item.closest('.table__sort').classList.remove('table__sort--icon-down');
      }, 300);
      item.closest('.table__sort').classList.remove('table__sort--active');
    });
    sorted = 0;
    sorterName = '';
     makeTable(constructorArr(sorted, dataArr));
    return sorted;
  }
};

const filterBy = (stroke) => {
  const workerArr = stroke.split('/');
  let filter = 0;
  filterKeys.forEach(function (el, index) {
    if (index === 0) {
      if (el.length > 0) {
        filter = workerArr[index].toLowerCase().includes(`${el}`) ? filter + 1 : filter - 1;
      }
    }
    if (index === 1) {
      if (el.length > 0) {
        filter = workerArr[index].toLowerCase().includes(`${el}`) ? filter + 1 : filter - 1;
      }
    }
    if (index === 2) {
      index++;
      if (el.length > 0) {
        el = el + ' -';
        filter = workerArr[index].toLowerCase().includes(`${el}`) ? filter + 1 : filter - 1;
      }
      index--;
    }
    if (index === 3) {
      if (el.length > 0) {
        el = '- ' + el;
        filter = workerArr[index].toLowerCase().includes(`${el}`) ? filter + 1 : filter - 1;
      }
    }
  });
  if (filter > 0) {
    filter = true;
  } else {
    filter = false;
  }
  return filter;
};

function getEducYears (educStart) {
  const today = new Date();
  const educStartDate = new Date(`October 1, ${educStart} 00:00:00`);
  let thisYear = 0;
  if (today.getMonth() < educStartDate.getMonth()) {
    thisYear = 1;
  } else if ((today.getMonth() === educStartDate.getMonth()) && today.getDate() < educStartDate.getDate()) {
    thisYear = 1;
  }

  const educYers = `${educStart} - ${educStart + 4}`;
  let educStatus = today.getFullYear() - educStartDate.getFullYear() - thisYear + 1;
  educStatus = educStatus > 4 ? 'Закончил' : educStatus + ' курс';

  return `${educYers} (${educStatus})`;
}

function makeTable (arr) {
  const filterKeysLength = filterKeys.reduce(function (sum, elem) {
    return sum + elem;
  }, '');
  if (filterKeysLength.length !== 0) {
    const filteredArr = arr.filter(filterBy);
    if (filteredArr.length > 0) {
      tableBox.innerHTML = '';
      let count = 0;
      for (const el of filteredArr) {
        count++;
        const workerArr = el.split('/');
        const row = document.createElement('div');
        const rowNumb = document.createElement('div');
        row.className = 'table-row';
        rowNumb.className = 'table-col row-numb';
        rowNumb.textContent = count;
        tableBox.appendChild(row);
        row.appendChild(rowNumb);
        for (const workerEl of workerArr) {
          const col = document.createElement('div');
          col.className = 'table-col';
          col.textContent = workerEl;
          row.appendChild(col);
        }
      }
    } else {
      tableBox.innerHTML = '';
    }
  } else {
    if (arr.length > 0) {
      tableBox.innerHTML = '';
      let count = 0;
      for (const el of arr) {
        count++;
        const workerArr = el.split('/');
        const row = document.createElement('div');
        const rowNumb = document.createElement('div');
        row.className = 'table-row';
        rowNumb.className = 'table-col row-numb';
        rowNumb.textContent = count;
        tableBox.appendChild(row);
        row.appendChild(rowNumb);
        for (const workerEl of workerArr) {
          const col = document.createElement('div');
          col.className = 'table-col';
          col.textContent = workerEl;
          row.appendChild(col);
        }
      }
    }
  }
}

tableSort.addEventListener('click', sort);

filterInputs.forEach(function (item) {
  item.addEventListener('input', function () {
    if (timeOut) {
      timeOut = clearTimeout(timeOut);
      timeOut = setTimeout(function () {
        filterInputs.forEach(function (el, index) {
          filterKeys[index] = '';
          console.log(filterKeys[index]);
          if (el.value !== '') {
            filterKeys[index] = el.value.toString().toLowerCase();
          } else {
          }
        });
        if (globalSortedArr) {
          makeTable(constructorArr(sorted, globalSortedArr));
        } else {
          makeTable(constructorArr(sorted, dataArr));
        }
      }, 300);
    } else {
      timeOut = setTimeout(function () {
        filterInputs.forEach(function (el, index) {
          filterKeys[index] = '';
          if (el.value !== '') {
            filterKeys[index] = el.value.toString().toLowerCase();
          } else {
          }
        });
        if (globalSortedArr) {
          makeTable(constructorArr(sorted, globalSortedArr));
        } else {
          makeTable(constructorArr(sorted, dataArr));
        }
      }, 300);
    }
  });
});

clearFilter.addEventListener('click', function (e) {
  e.preventDefault();
  filterInputs.forEach(function (el) {
    el.textContent = '';
    el.value = '';
  });
  filterKeys = ['', '', '', ''];
  if (globalSortedArr) {
    makeTable(constructorArr(sorted, globalSortedArr));
  } else {
    makeTable(constructorArr(sorted, dataArr));
  }
});

addForm.addEventListener('submit', (e) => {
  const errorAlerts = document.querySelectorAll('.input-error');
  const addFormInputs = document.querySelectorAll('.addForm-input');
  if (errorAlerts.length > 0) {
    for (const item of errorAlerts) {
      item.remove();
    }
  }
  for (const item of addFormInputs) {
    item.classList.remove('addForm-input--error');
  }
  e.preventDefault();
  let filled = 0;
  const newStudent = {
    name: '',
    surname: '',
    middleName: '',
    dobDate: new Date('October 19, 1994 03:24:00'),
    educStart: null,
    faculty: '',
    get dob () {
      return this.dobDate.toLocaleDateString();
    },
    get fullName () {
      return `${this.surname} ${this.name} ${this.middleName}`;
    },
    get age () {
      const today = new Date();
      let thisYear = 0;
      if (today.getMonth() < this.dobDate.getMonth()) {
        thisYear = 1;
      } else if ((today.getMonth() === this.dobDate.getMonth()) && today.getDate() < this.dobDate.getDate()) {
        thisYear = 1;
      }
      const age = today.getFullYear() - this.dobDate.getFullYear() - thisYear;
      return age;
    }

  };
  addFormInputs.forEach(function (el) {
    let errorAlert;
    if (el.value.trim().length > 1) {
      if (el.id === 'input-1') {
        filled++;
        newStudent.name = el.value;
      }
      if (el.id === 'input-2') {
        filled++;
        newStudent.surname = el.value;
      }
      if (el.id === 'input-3') {
        filled++;
        newStudent.middleName = el.value;
      }
      if (el.id === 'input-4') {
        filled++;
        let today = new Date();

        let pathDay = new Date('01.01.1900');
        let idate = new Date(el.value);
        // The date entered by the user will have the same
        // time from today's date object.
        idate.setHours(today.getHours());
        idate.setMinutes(today.getMinutes());
        idate.setSeconds(today.getSeconds());
        idate.setMilliseconds(today.getMilliseconds());
        pathDay.setHours(today.getHours());
        pathDay.setMinutes(today.getMinutes());
        pathDay.setSeconds(today.getSeconds());
        pathDay.setMilliseconds(today.getMilliseconds());

        // Parsing the date objects.
        today = Date.parse(today);
        idate = Date.parse(idate);
        pathDay = Date.parse(pathDay);
        // Comparisons.
        if (idate <= today && idate >= pathDay) {
          newStudent.dobDate = new Date(el.value);
        } else {
          const today = new Date();
          const errorAlert = document.createElement('div');
          el.classList.add('addForm-input--error');
          errorAlert.classList.add('input-error');
          errorAlert.classList.add('error-date');
          errorAlert.textContent += 'Заполните поле';
          errorAlert.textContent = `Некорректная дата 1900 - ${today.getFullYear()}`;
          el.closest('.label').append(errorAlert);
          return;
        }
      }
      if (el.id === 'input-5') {
        filled++;
        const today = new Date();
        if (Number(el.value) >= 2000 && Number(el.value) <= today.getFullYear()) {
          newStudent.educStart = Number(el.value);
        } else {
          const today = new Date();
          const errorAlert = document.createElement('div');
          errorAlert.classList.add('input-error');
          el.classList.add('addForm-input--error');
          errorAlert.classList.add('error-date');
          errorAlert.textContent += 'Заполните поле';
          errorAlert.textContent = `Некорректная дата 2000 - ${today.getFullYear()}`;
          el.closest('.label').append(errorAlert);
        }
      }
      if (el.id === 'input-6') {
        filled++;
        newStudent.faculty = el.value;
      }
    } else {
      if (!errorAlert) {
        el.classList.add('addForm-input--error');
        const errorAlert = document.createElement('div');
        errorAlert.classList.add('input-error');
        errorAlert.textContent += 'Заполните поле';
        el.closest('.label').append(errorAlert);
      }
      return;
    }
    if (filled === 6) {
      dataArr.unshift(newStudent);
      unsortedArr = dataArr.slice();
      makeTable(constructorArr(sorted, dataArr));
      for (const item of addFormInputs) {
        item.value = '';
      }
      const savedDataArr = saveLocalStorage();
      localStorage.setItem('savedDataArr', JSON.stringify(savedDataArr));
    }
  });
});
