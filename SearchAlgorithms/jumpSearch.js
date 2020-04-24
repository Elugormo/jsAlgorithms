let arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];

let jumpSearch = (arr, value) => {
  let len = arr.length;
  let step = Math.floor(Math.sqrt(len));
  let idnex = Math.min(step, len) - 1;

  let lower = 0;

  while (arr[Math.min(step, len) - 1] < value) {
    lower = step;
    step += step;
    if (lower >= len) return false;
  }
  let upper = Math.min(step, len);
  while (arr[lower] < value) {
    lower++;
    if (lower == upper) return false;
  }
  if (arr[lower] == value) return lower;

  return false;
};
