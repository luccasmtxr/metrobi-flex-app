import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `class BracketValidator {
  static isValid(str) {
    const stack = [];
    const pairs = {
      ")": "(",
      "}": "{",
      "]": "[",
    };

    for (const char of str) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else if (char in pairs) {
        if (stack.pop() !== pairs[char]) {
          return false; // mismatch found
        }
      }
    }

    return stack.length === 0;
  }
}

// Example usage:
console.log(BracketValidator.isValid("{[]}"));   // true
console.log(BracketValidator.isValid("{(])}"));  // false
console.log(BracketValidator.isValid("{([)]}")); // false
`;

export const Question4 = (
  <div>
    <h3>Balanced Brackets Validator </h3>
    <p>
      This solution uses a <code>BracketValidator</code> class with a static{" "}
      <code>isValid</code> method that ensures brackets are properly opened and
      closed. It relies on a <strong>stack</strong> to keep track of open
      brackets.
    </p>

    <SyntaxHighlighter language="javascript" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  </div>
);
