function countBs(s) {
  return countChar(s, "B");
}

function countChar(s, c) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) n++;
  }
  return n;
}

let s = "asdfBBBasadfasdfffffasdfBasdafasdfBBBBaasdfasdf";
console.log(countChar(s, "a"));
console.log(countChar(s, "s"));
console.log(countChar(s, "f"));
console.log(countChar(s, "d"));
console.log(countChar(s, "B"));
console.log(countBs(s));
console.log(countChar(s, "x"));
