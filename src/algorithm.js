// Data Structure
class Stack {
  constructor() {
    this.items = [];
  }
  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
  empty() {
    return this.items.length == 0;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  print() {
    console.log(this.items.toString());
  }
}

// Implementations of expression evaluation
const calc = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "×":
      return a * b;
      break;
    case "÷":
      return a / b;
    default:
      return null;
  }
};

const isDigit = ch => {
  const zeroCode = "0".charCodeAt(0);
  const nineCode = "9".charCodeAt(0);
  const currCode = ch.charCodeAt(0);
  return currCode >= zeroCode && currCode <= nineCode;
};

const solve = expr => {
  const priority = {
    "+": 1,
    "-": 1,
    "×": 2,
    "÷": 2
  };
  let nums = new Stack();
  let opts = new Stack();

  // scan the input expression
  for (let i = 0; i < expr.length; ++i) {
    // skip the space
    if (expr[i] === " ") {
      continue;
    }
    // left parenthesis
    else if (expr[i] === "(") {
      opts.push(expr[i]);
    }
    // parse the number
    else if (isDigit(expr[i])) {
      let val = 0;
      while (i < expr.length && isDigit(expr[i])) {
        val = val * 10 + expr[i].charCodeAt(0) - '0'.charCodeAt(0);
        i++;
      }
      nums.push(val);
      i--;
    }
    // right parenthesis
    else if (expr[i] === ")") {
      while (!opts.empty() && opts.peek() !== "(") {
        const b = nums.pop();
        const a = nums.pop();
        const opt = opts.pop();
        nums.push(calc(a, b, opt));
      }
      if (!opts.empty()) {
        opts.pop();
      }
    }
    else {
      while (!opts.empty() && priority[opts.peek()] >= priority[expr[i]]) {
        const b = nums.pop();
        const a = nums.pop();
        const opt = opts.pop();
        nums.push(calc(a, b, opt));
      }
      opts.push(expr[i]);
    }
  }

  // get the final result
  while (!opts.empty()) {
    const b = nums.pop();
    const a = nums.pop();
    const opt = opts.pop();
    nums.push(calc(a, b, opt));
  }
  return nums.peek();
};

export default solve;
