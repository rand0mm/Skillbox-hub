document.addEventListener('DOMContentLoaded', function () {
  const restoredSession = JSON.parse(localStorage.getItem('savedDataArr'));
  if (restoredSession) {
    savedDataArr = restoredSession;
    unsortedArr = savedDataArr.slice();
  } else { savedDataArr = dataArr; }
  // makeTable(constructorArr(sorted, savedDataArr));
});
