const range = function(start, end, step) {
  let theRange = [];
  if (typeof start == 'undefined' || typeof end == 'undefined' || typeof step == 'undefined' || start > end || step <= 0) {
    return theRange;
  } else {
    for (let i = start; i <= end; i += step) {
      theRange.push(i);
    }
    return theRange;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));