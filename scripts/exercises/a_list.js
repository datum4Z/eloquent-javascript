let arr = [1,1,2,3,5,8,13];

// let list = {value: arr[0], rest: null};
// list.rest = {value: arr[1], rest: null};
// list.rest.rest = {value: arr[2], rest: null};

function arrayToList(arr) {
  let list = {value: null, rest: null};
  let workingItem = null;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      list.value = arr[i];
      workingItem = list;
    } else {
      let listItem = {value: arr[i], rest: null};
      workingItem.rest = listItem;
      workingItem = listItem;
    }
  }
  return list;
}

// function arrayToList(arr) {
//   return arr.reduceRight((next, value) => ({ value, rest: next }), null);
// }

let list = arrayToList(arr);
console.log(list);
console.log(list.rest);
console.log(list.rest.rest);
console.log(list.rest.rest.rest);

function listToArray(list) {
  arr = [];
  let item = list;
  while (item.rest) {
    arr.push(item.value);
    item = item.rest;
  }
  arr.push(item.value);
  return arr;
}

console.log(listToArray(list));

function prepend(item, list) {
  return { value: item, rest: list };
}

console.log(prepend(0, list));

console.log("testing nth");

function nth(list, n) {
  if (n < 0) return undefined;
  if (n == 0) return list.value;
  let obj = list;
  for (let i = 0; i < n; i++) {
    if (obj.rest == null) return undefined;
    obj = obj.rest;
  }
  return obj.value;
}

function nth_recurse(list, n) {
  if (n == 0) return list.value;
  if (list.rest == null) return undefined;
  return nth(list.rest, n-1);
}

console.log(list);
console.log(nth(list, 0) === nth_recurse(list, 0));
console.log(nth(list, 0) === 1);
console.log(nth(list, 1) === nth_recurse(list, 1));
console.log(nth(list, 1) === 1);
console.log(nth(list, 2) === nth_recurse(list, 2));
console.log(nth(list, 2) === 2);
console.log(nth(list, 3) === nth_recurse(list, 3));
console.log(nth(list, 4) === nth_recurse(list, 4));
console.log(nth(list, 5) === nth_recurse(list, 5));
console.log(nth(list, 6) === nth_recurse(list, 6));
console.log(nth(list, 7) === nth_recurse(list, 7));
console.log(nth(list, 8) === nth_recurse(list, 8));
console.log(nth(list, -1) === nth_recurse(list, -1));
