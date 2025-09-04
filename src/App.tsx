import { useState } from "react";
import Modal from "./components/modal";
import "./App.css";

import {
  Question1,
  Question2,
  Question4,
  Question5,
  Question6,
  Question7,
} from "./questions";

function App() {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
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
        <header className="header">Header</header>

        {/* Core */}
        <div className="core">
          <div className="left-column">
            <div
              className="hero"
              onClick={() => openModal("Question 1", Question1, "page")}
            >
              Question 1
            </div>

            <div
              className="sidebar"
              onClick={() => openModal("Question 2", Question2, "code")}
            >
              Question 2
            </div>
          </div>

          <div className="right-column">
            <div
              className="main-content"
              onClick={() => openModal("Question 4", Question4, "code")}
            >
              Question 4
            </div>

            <div
              className="extra-content"
              onClick={() => openModal("Question 5", Question5, "code")}
            >
              Question 5
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="related">
          <div
            className="related-images"
            onClick={() => openModal("Question 6", <Question6 />, "page")}
          >
            Question 6
          </div>

          <div
            className="related-posts"
            onClick={() => openModal("Related Posts", Question7, "code")}
          >
            Question 7
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">Footer</footer>
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
