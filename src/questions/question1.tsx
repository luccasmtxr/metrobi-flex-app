import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


const codeString = `function findDuplicates(arr) {
  const seen = new Set();       // keeps track of unique items
  const duplicates = new Set(); // keeps track of duplicates

  for (const item of arr) {
    if (seen.has(item)) {
      // If item already seen → it's a duplicate
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  // Convert Set back to an array
  return Array.from(duplicates);
}

// Example usage:
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6, 3]));
// Output: [2, 1, 3]
`;

export const Question1 = (
  <div>
    <h3>Find Duplicates in an Array</h3>
    <p>
      This function iterates through an array, tracks unique values with a{" "}
      <code>Set</code>, and collects duplicates into another{" "}
      <code>Set</code>. Finally, it returns the duplicates as an array.
    </p>

    <SyntaxHighlighter language="javascript" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  </div>
);

