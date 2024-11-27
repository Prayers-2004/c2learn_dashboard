import React from 'react';
import './Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Upgrade Your Plan</h2>
        <p>Get access to premium study materials and advanced features!</p>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
