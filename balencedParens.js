function balencedParens(string) {
  return !string.split("").reduce((previous, char) => {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++ previous;
    }
    if (char === ")") {
      return --previous
    }
    return previous;
  }, 0);
}

console.log(balencedParens(")("));
console.log(balencedParens("()())()"));


const balenceParens = (str) => {
  const stack = [];
  const open = { '{': '}', '[': ']', '(': ')' };
  const closed = { '}': true, ']': true, ')': true };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(balenceParens("(((())))"));
console.log(balenceParens("[{()}]"));
