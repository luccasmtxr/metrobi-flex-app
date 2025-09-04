import { useState } from "react";
import  Modal from "./components/modal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.css";

function App() {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const [modalTitle, setModalTitle] = useState("");
  const [modalVariant, setModalVariant] = useState<"code" | "page">("code");

  const openModal = (
    title: string,
    content: React.ReactNode,
    variant: "code" | "page" = "code"
  ) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVariant(variant);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="app-root">
      <div className="app">
        {/* Header */}
        <header
          className="header"
          onClick={() =>
            openModal(
              "Header Code Example",
              <SyntaxHighlighter language="tsx" style={atomDark}>
{`function Header() {
  return <header>Header</header>;
}`}
              </SyntaxHighlighter>,
              "code"
            )
          }
        >
          Header
        </header>

        {/* Core */}
        <div className="core">
          <div className="left-column">
            <div
              className="hero"
              onClick={() =>
                openModal(
                  "Hero Page",
                  <div>
                    <h3>Hero Section</h3>
                    <p>This is a full page modal example for the Hero.</p>
                  </div>,
                  "page"
                )
              }
            >
              Hero
            </div>

            <div
              className="sidebar"
              onClick={() =>
                openModal(
                  "Sidebar Code Example",
                  <SyntaxHighlighter language="css" style={atomDark}>
{`.sidebar {
  background: greenyellow;
  flex: 3;
}`}
                  </SyntaxHighlighter>,
                  "code"
                )
              }
            >
              Sidebar
            </div>
          </div>

          <div className="right-column">
            <div
              className="main-content"
              onClick={() =>
                openModal(
                  "Main Content Page",
                  <div>
                    <h3>Main Content</h3>
                    <p>
                      This could render any JSX like a React page with lists,
                      forms, or components.
                    </p>
                  </div>,
                  "page"
                )
              }
            >
              Main content
            </div>

            <div
              className="extra-content"
              onClick={() =>
                openModal(
                  "Extra Content Code Example",
                  <SyntaxHighlighter language="javascript" style={atomDark}>
{`console.log("Hello from extra content!");`}
                  </SyntaxHighlighter>,
                  "code"
                )
              }
            >
              Extra content
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="related">
          <div
            className="related-images"
            onClick={() =>
              openModal(
                "Related Images Page",
                <div>
                  <h3>Related Images</h3>
                  <p>Here we could render a gallery component or image grid.</p>
                </div>,
                "page"
              )
            }
          >
            Related Images
          </div>

          <div
            className="related-posts"
            onClick={() =>
              openModal(
                "Related Posts Code Example",
                <SyntaxHighlighter language="json" style={atomDark}>
{`[
  { "id": 1, "title": "First Post" },
  { "id": 2, "title": "Second Post" }
]`}
                </SyntaxHighlighter>,
                "code"
              )
            }
          >
            Related Posts
          </div>
        </div>

        {/* Footer */}
        <footer
          className="footer"
          onClick={() =>
            openModal(
              "Footer Code Example",
              <SyntaxHighlighter language="html" style={atomDark}>
{`<footer>Footer Section</footer>`}
              </SyntaxHighlighter>,
              "code"
            )
          }
        >
          Footer
        </footer>
      </div>

      {/* Modal */}
      {modalContent && (
        <Modal title={modalTitle} onClose={closeModal} variant={modalVariant}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
}

export default App;
