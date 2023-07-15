function range(start, end, step = 1) {
  if (step === 0) {
    return undefined;
  }

  let arr = [];
  let i = start;
  while ((step > 0 && i <= end) || (step < 0 && i >= end)) {
    arr.push(i);
    i += step;
  }

  return arr;
}

function sum(arr) {
  if (!arr) {
    return 0;
  }

  let total = 0;
  for (let num of arr) {
    total += num;
  }
  
  return total;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(1, 10, 0));
console.log(range(5, 2, -1));
