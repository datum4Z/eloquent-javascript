function flatten(arr) {
  return arr.reduce((prev, curr) => prev.concat(curr), []);
}

console.log(flatten([1,2,3]));
console.log(flatten([1,2,[1,2,3]]));
console.log(flatten([1,[1,2,3],[1,2,[1,2,3]]]));
