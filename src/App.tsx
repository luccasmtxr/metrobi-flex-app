import { useState } from "react";
import  Modal from "./components/modal";
import "./App.css";

import { Question1 } from "./questions";



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

  const closeModal = () => setModalContent(null);

  return (
    <div className="app-root">
      <div className="app">
        {/* Header */}
        <header
          className="header"
          onClick={() => openModal("Header", Question1, "code")}
        >
          Header
        </header>

        {/* Core */}
        <div className="core">
          <div className="left-column">
            <div
              className="hero"
              onClick={() => openModal("Hero", Question1, "page")}
            >
              Hero
            </div>

            <div
              className="sidebar"
              onClick={() => openModal("Sidebar", Question1, "code")}
            >
              Sidebar
            </div>
          </div>

          <div className="right-column">
            <div
              className="main-content"
              onClick={() =>
                openModal("Main Content", Question1, "page")
              }
            >
              Main content
            </div>

            <div
              className="extra-content"
              onClick={() => openModal("Extra Content", Question1, "code")}
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
              openModal("Related Images", Question1, "page")
            }
          >
            Related Images
          </div>

          <div
            className="related-posts"
            onClick={() =>
              openModal("Related Posts", Question1, "code")
            }
          >
            Related Posts
          </div>
        </div>

        {/* Footer */}
        <footer
          className="footer"
          onClick={() => openModal("Footer", Question1, "code")}
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
