function myLoop(value, test, update, body) {
  let innerValue = value;
  while (test(innerValue)) {
    body(innerValue);
    innerValue = update(innerValue);
  }
}

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

let value = 1;
let test = x => x < 1000;
let body = x => console.log("in the body with value: " + x);
let update = x => (x+1) ** 2;

console.log(loop(value, test, update, body));

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1