import { useState } from "react";
import "./App.css";

function App() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleOpen = (content: string) => {
    setModalContent(content);
  };

  const handleClose = () => {
    setModalContent(null);
  };

  return (
    <div className="app-root">
      <div className="app">
        {/* Header */}
        <header className="header" onClick={() => handleOpen("Header")}>
          Header
        </header>

        <div className="core">
          <div className="left-column">
            <div className="hero" onClick={() => handleOpen("Hero")}>
              Hero
            </div>
            <div className="sidebar" onClick={() => handleOpen("Sidebar")}>
              Sidebar
            </div>
          </div>
          <div className="right-column">
            <div
              className="main-content"
              onClick={() => handleOpen("Main Content")}
            >
              Main content
            </div>
            <div
              className="extra-content"
              onClick={() => handleOpen("Extra Content")}
            >
              Extra content
            </div>
          </div>
        </div>

        {/* Related Images + Related Posts */}
        <div className="related">
          <div
            className="related-images"
            onClick={() => handleOpen("Related Images")}
          >
            Related Images
          </div>
          <div
            className="related-posts"
            onClick={() => handleOpen("Related Posts")}
          >
            Related Posts
          </div>
        </div>

        {/* Footer */}
        <footer className="footer" onClick={() => handleOpen("Footer")}>
          Footer
        </footer>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2>{modalContent}</h2>
            <p>This is the {modalContent} modal content.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
