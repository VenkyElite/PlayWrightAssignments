// Count Even numbers between 1 and 30
let count = 0;

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) { // check if the given number is even
    count++;
  }
}

console.log("Number of Even numbers between 1 and 30:", count);