import { Queue, Stack } from "./datastructures.js";

const precedence = { "^": 4, "*": 3, "/": 3, "+": 2, "-": 2 };
const associativity = {
  "^": "right",
  "*": "left",
  "/": "left",
  "+": "left",
  "-": "left",
};

export function tokenize(expression) {
  return expression.split(" ");
}

export function infixToPostfix(expression) {
  const inputQueue = new Queue();
  const outputQueue = new Queue();
  const operatorStack = new Stack();

  tokenize(expression).forEach((token) => inputQueue.enqueue(token));

  while (!inputQueue.isEmpty()) {
    const token = inputQueue.dequeue();

    if (!isNaN(token)) outputQueue.enqueue(token);
    else if ("^*/+-".includes(token)) {
      while (
        !operatorStack.isEmpty() &&
        "^*/+-".includes(operatorStack.peek()) &&
        ((associativity[token] === "left" &&
          precedence[operatorStack.peek()] >= precedence[token]) ||
          (associativity[token] === "right" &&
            precedence[operatorStack.peek()] > precedence[token]))
      ) {
        outputQueue.enqueue(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token === "(") operatorStack.push(token);
    else if (token === ")") {
      while (!operatorStack.isEmpty() && operatorStack.peek() !== "(")
        outputQueue.enqueue(operatorStack.pop());
      if (operatorStack.peek() === "(") operatorStack.pop();
      else throw new Error("Mismatched parentheses");
    }
  }

  while (!operatorStack.isEmpty()) outputQueue.enqueue(operatorStack.pop());

  const postfixTokens = [];
  while (!outputQueue.isEmpty()) postfixTokens.push(outputQueue.dequeue());

  return postfixTokens.join(" ");
}
