import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Question1 = (
  <SyntaxHighlighter language="tsx" style={atomDark} >
    {`function Example() {
  return <div>Example</div>;
}`}
  </SyntaxHighlighter>
);