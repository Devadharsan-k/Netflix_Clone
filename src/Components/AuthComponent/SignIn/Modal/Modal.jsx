import React from "react";
import styles from "./Modal.module.css";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={onClose}>
          <RxCross1 size={20} />
        </button>
        <p>
          Don't have an account? Create your own email and password and click
          Sign Up Now.
        </p>
      </div>
    </div>
  );
};

export default Modal;
