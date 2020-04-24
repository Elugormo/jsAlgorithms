let arr = [100, 120, 1123, 32, 56];

function linearSort(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] == num) {
      console.log("Number is located at position", i);
      return i;
    }
  }
  return -1;
}

if (linearSort(arr, 1123) == -1)
  console.log("There is no such number in array");
