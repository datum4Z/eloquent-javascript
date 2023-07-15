function deepEqual(o1, o2) {
  let keys1 = Object.keys(o1);
  let keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) return false;

  for (let o1K of keys1) {
    let o1KV = o1[o1K];
    let o1KVType = typeof o1KV;
    let o2KV = o2[o1K];
    let o2KVType = typeof o2KV;

    if (!(o1KV == null) && !(o2KV == null) &&
      o1KVType == "object" && o2KVType == "object") {
      if (!deepEqual(o1KV, o2KV)) return false;
    } else {
      if (!(o1KV === o2KV)) return false;
    }
  }
  
  return true;
}

let out1 = {foo: 0, bar: 0, baz: 0};
let out2 = {foo: 0, bar: 0, baz: 0};
let out3 = {foo: 0, bar: 0, baz: "0"};
let out4 = {foo: 0, bar: 1, baz: 1, foobar: {ban: "foobarban", bad: "foobarbad"}};
let out5 = {foo: 0, bar: 1, baz: 1, foobar: {ban: "foobarban", bad: "foobarbad"}};
let out6 = {foo: 0, bar: 0, baz: 1, foobar: {ban: "foobarban", bad: "foobarbag"}};
let out7 = {foo: 0, bar: 1, baz: 1, foobar: {ban: "foobarban"}};
let out8 = {foo: 0, bar: 1, baz: 1, foobar: {ban: "foobarban", bad: null}};
let out9 = {foo: 0, bar: 1, baz: 1, foobar: {ban: "foobarban", bad: null}};
let out10 = {foo: 0, bar: 1, baz: 1, foobar: {ban: "foobarban", bad: {inHere: 100}}};
let out11 = {foo: 0, bar: 1, baz: 1, foobar: {ban: "foobarban", bad: {inHere: 100}}};
let out12 = {foo: 0, bar: 0};

console.log(deepEqual(out1, out2));
console.log(deepEqual(out2, out3));
console.log(deepEqual(out3, out4));
console.log(deepEqual(out4, out5));
console.log(deepEqual(out4, out6));
console.log(deepEqual(out4, out7));
console.log(deepEqual(out4, out9));
console.log(deepEqual(out8, out9));
console.log(deepEqual(out10, out11));
console.log(deepEqual(out12, out1));
