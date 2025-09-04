import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `function getMaxValue(carrotTypes, capacity) {
  const dp = Array(capacity + 1).fill(0);

  for (let c = 1; c <= capacity; c++) {
    for (const carrot of carrotTypes) {
      if (carrot.kg <= c) {
        dp[c] = Math.max(dp[c], dp[c - carrot.kg] + carrot.price);
      }
    }
  }

  return dp[capacity];
}

// Example:
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 36;

console.log(getMaxValue(carrotTypes, capacity)); // 1080
`;

export const Question7 = (
  <div>
    <h3>Unbounded Knapsack: Carrot Bag Problem</h3>
    <p>
      We want to fill the bag to maximize total value. Since carrots are unlimited,
      this is solved with the <strong>unbounded knapsack DP algorithm</strong>.
    </p>

    <SyntaxHighlighter language="javascript" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  </div>
);
