// задача найти элемент в упорядоченном массиве, конкретно тут число
// идет сравнение через сравнение середины массива с целью
// если цель меньше мида цикл повторяется с левой частью и так пока не найдет цель
let array = [-1, 0, 3, 5, 7, 9, 12]

let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}


console.log(search(array, 9))
