function hammingDistance (a, b) {
  let distance = 0;
  let xor = a ^ b;
  
  while (xor > 0) {
    if (xor & 1) {
      distance++;
    }
    xor = xor >> 1;
  }
  
  return distance;
 
}


const assert = require("chai").assert;

function doTest (a, b, expected) {
        const actual = hammingDistance(a, b);
        assert.strictEqual(actual, expected,
                `for ${a} and ${b} expected ${expected} but got ${actual}`
        );
}
