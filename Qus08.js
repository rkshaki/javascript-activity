const array = [10, 20, 30, 40, 50, 60];
document.write(ArrMax(array));
document.write(ArrMin(array));

function ArrMax(arr) {
  return "Max value in an array: " + Math.max.apply(null,arr)+"<br>";
}

function ArrMin(arr) {
  return  "Min value in an array: " + Math.min.apply(null,arr);
}
