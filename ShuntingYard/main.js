import { infixToPostfix } from "./shuntingYard.js";
import { rpnCalc } from "./rpnCalculator.js";

const infixExpr = "( 2 + 3 ) * 4 ^ 2";
const postfixExpr = infixToPostfix(infixExpr);

console.log("Infix:   ", infixExpr);
console.log("Postfix: ", postfixExpr);

const result = rpnCalc(postfixExpr);
console.log("Resultat:", result);
