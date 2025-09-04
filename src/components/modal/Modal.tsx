import React from "react";
import "./Modal.css";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  variant?: "code" | "page"; // default = "code"
}

export default function Modal({ title, onClose, children, variant = "code" }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-box ${variant}`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ✖
          </button>
        </header>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
