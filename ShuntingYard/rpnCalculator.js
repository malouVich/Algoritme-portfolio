export function rpnCalc(expression) {
  const inputQueue = expression.split(" ");
  const resultStack = [];

  while (inputQueue.length > 0) {
    const token = inputQueue.shift();

    if (!isNaN(token)) resultStack.push(Number(token));
    else {
      const b = resultStack.pop();
      const a = resultStack.pop();
      let result;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
        case "^":
          result = Math.pow(a, b);
          break;
        default:
          throw new Error("Ukendt operator: " + token);
      }
      resultStack.push(result);
    }
  }
  return resultStack[0];
}
