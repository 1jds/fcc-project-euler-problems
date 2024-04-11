// Here we get rid of all of the tree stuff, and just do some maths...
// It works up until a point, when the computer say 'No!'

let count = 0;

function leafCount(limit, x = 0, y = 0) {
  if (x === limit && y === limit) {
    count++;
    return;
  }
  if (y < limit) {
    leafCount(limit, x, y + 1);
  }
  if (x < limit) {
    leafCount(limit, x + 1, y);
  }
}

// leafCount(2);
// leafCount(4);
leafCount(9);
// leafCount(20); Won't work, because it's too many recursive calls...

console.log(count);
