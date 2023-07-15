function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function reverseArrayInPlace(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++; j--;
  }

  return arr;
}

console.log(reverseArray([1,2,3]));
console.log(reverseArray([1,2,3,5,123,"awer",11]));
console.log(reverseArray([1,2,"asdfasdf",4,5,6,7,7,3,true,false,undefined,Infinity]));

console.log(reverseArrayInPlace([1,2,3]));
console.log(reverseArrayInPlace([1,2,3,5,123,"awer",11]));
console.log(reverseArrayInPlace([1,2,"asdfasdf",4,5,6,7,7,3,true,false,undefined,Infinity]));
