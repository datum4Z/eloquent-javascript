var SCRIPTS = require('./book_code/scripts.js');
console.log(SCRIPTS[0]);

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) passed.push(element);
  }
  return passed;
}

console.log("\n\nLIVING SCRIPTS");
console.log(filter(SCRIPTS, script => script.living));

console.log("\n\nTTB SCRIPTS");
console.log(SCRIPTS.filter(s => s.direction == "ttb"));

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");

console.log("\n\nRTL SCRIPTS");
console.log(map(rtlScripts, s => s.name));

console.log("\n\nOLD SCRIPTS");
console.log(SCRIPTS.filter(s => s.year < 0).map(s => s.name));

console.log("\n\nREALLY OLD SCRIPTS");
console.log(SCRIPTS.filter(s => s.year < -1000).map(s => s.name));

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1,2,3,4], (a,b) => a + b, 0));
console.log([1,2,3,4].reduce((a,b) => a + b));

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));

let horseShoe = "🐴👟";
console.log(horseShoe.length);
// -> 4

console.log(horseShoe[0]);
// -> (Invalid half-character)

console.log(horseShoe.charCodeAt(0));
// -> 55357 (Code of the half-character)

console.log(horseShoe.codePointAt(0));
// -> 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(`${char}: ${char.codePointAt(0)}`);
}
// -> 🌹
// -> 🐉

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1,2,3,4,5], n => n > 2));

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(",");
}

console.log(textScripts('狗说“汪”，用英语来说是 "woof" Теперь это предложение на трех языках!'));
