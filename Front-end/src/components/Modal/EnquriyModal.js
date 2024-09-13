import React from "react";
import Modal from "@mui/material/Modal";
// import MainRegister from "../../pages/MainRegister";
// import Applynow from "../../pages/Applynow";
import EnquiryForm from "../../pages/EnquiryForm";
 // Import your MainRegister component here

const EnquriyModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", overflowY: "auto", maxHeight: "100vh" }}>
        <EnquiryForm /> {/* Render the MainRegister component */}
      </div>
    </Modal>
  );
};

export default EnquriyModal;
