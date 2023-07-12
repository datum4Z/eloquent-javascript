function min(x, y) {
  if (Number(x) <= Number(y)) {
    return Number(x);
  } else {
    return Number(y);
  }
}

console.log(min(1,2));
console.log(min(2,1));
console.log(min(2,2));
console.log(min(120389123,1));
console.log(min(-1, 109238192839));
console.log(min(-1001923019203,1));
console.log(min("asdf", "oweio"));
console.log(min("ASDASD", "asdfasdf"));
console.log(min(1234, "asdf"));
console.log(min("asdf", 1234));
console.log(min("1234", 1234));
console.log(min("1", 2));
console.log(min(1, "2"));
console.log(min(Infinity, Infinity + 1));
console.log(min(true, true));
console.log(min(false, true));
console.log(min(false, false));
console.log(min(true, false));
console.log(min(-100, false));
console.log(min(-100, true));
