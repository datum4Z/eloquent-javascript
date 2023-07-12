function isEven(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(11));
console.log(isEven(20));
console.log(isEven(75));
console.log(isEven(1000));
console.log(isEven(18300));
console.log(isEven(-1));
