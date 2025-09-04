import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `async function printWithExponentialDelay(arr) {
  let delay = 1000; // start with 1 second

  for (const item of arr) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    console.log(item); // print the item after the delay
    delay *= 2; // double the delay for the next iteration
  }
}

// Example usage:
printWithExponentialDelay(["a", "b", "c", "d"]);

// Output timeline:
// "a" → after 1s
// "b" → after 2s
// "c" → after 4s
// "d" → after 8s
`;

export const Question2 = (
  <div>
    <h3>Async Print with Exponential Delay</h3>
    <p>
      This function iterates through an array and prints each item with a delay
      that doubles every time (1s, 2s, 4s, 8s, ...).
    </p>

    <SyntaxHighlighter language="javascript" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  </div>
);
