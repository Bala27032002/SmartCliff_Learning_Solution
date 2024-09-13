import React from "react";
import { WhatsApp } from "@mui/icons-material";
import "../../styles/HeaderStyles.css";

const WhatsAppIcon = () => {
  // Handle WhatsApp icon click
  const handleClick = () => {
    // Construct the WhatsApp chat URL with the desired phone number
    const phoneNumber = "1234567890"; // Replace with your phone number
    const chatUrl = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp chat URL in a new tab
    window.open(chatUrl, "_blank");

    // You can perform any additional actions here
    // For example, show a modal, update state, etc.
  };

  return (
    <div className="whatsapp-icon" onClick={handleClick}>
      <WhatsApp />
    </div>
  );
};

export default WhatsAppIcon;
