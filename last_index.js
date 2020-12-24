const lastIndexOf = function(array, value) {
  if (array.length === 0) {
    return -1;
  }
  for (let i = array.length - 1; i > -1; i--) {
    if (array[i] === value) {
      return i;
    } else if (i === 0) {
      return -1;
    }
  }
}