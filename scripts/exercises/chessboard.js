let size = 10;
let board = "";
for (let n = 0; n < size; n++) {
  for (let m = 0; m < size; m++) {
    board += (n + m) % 2 == 0 ? "#" : "@";
  }
  board += "\n";
}

console.log(board);
