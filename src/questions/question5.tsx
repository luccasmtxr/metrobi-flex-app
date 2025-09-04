import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `function eggDrop(totalFloors = 100) {
  let step = 14; // because 14 + 13 + ... + 1 >= 100
  let currentFloor = step;
  let previousFloor = 0;

  while (currentFloor <= totalFloors) {
    console.log(\`Dropping first egg from floor \${currentFloor}\`);
    const eggBreaks = false; // <-- Replace with real test

    if (eggBreaks) {
      // Linear search with second egg
      for (let i = previousFloor + 1; i < currentFloor; i++) {
        console.log(\`Dropping second egg from floor \${i}\`);
        const egg2Breaks = false; // <-- Replace with real test
        if (egg2Breaks) {
          return i - 1;
        }
      }
      return currentFloor - 1;
    }

    step -= 1;
    previousFloor = currentFloor;
    currentFloor += step;
  }

  return totalFloors; // if no egg breaks
}

// Example usage (simulation context)
console.log(eggDrop(100));
`;

export const Question5 = (
  <div>
    <h3>Egg Dropping Problem </h3>
    <p>
      The optimal strategy is to drop the first egg in decreasing steps
      (14, 27, 39, …) and use the second egg linearly once the first breaks.
      This ensures a worst-case of <strong>14 drops</strong>.
    </p>

    <SyntaxHighlighter language="javascript" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  </div>
);
