function mySlice(arr, start, end) {
  if (start === undefined) {
    start = 0;
  }
  if (start < 0) {
    start = arr.length + start;
  }

  if (end === undefined) {
    end = arr.length;
  }
  if (end < 0) {
    end = arr.length + end;
  }

  var newArray = [];
  for (var i = start; i < end; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}
