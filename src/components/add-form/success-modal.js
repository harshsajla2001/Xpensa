import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import added from '../../assets/images/added-image.png';
import "./success-modal.css";
const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully!</label>
        <img
          src={added}
          alt="Expense Added"
          className="added-image"
        />
        <Link to="/">
          <div className="take-home-button">
            <AiOutlineHome className='AiOutlineHome'/>
            Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;