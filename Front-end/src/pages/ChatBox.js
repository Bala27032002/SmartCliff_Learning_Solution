import React, { useState } from "react";
import { Button, Drawer, TextField, IconButton, Menu, MenuItem } from "@mui/material";
import { Chat, Close, MoreVert, InsertEmoticon } from "@mui/icons-material";

const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setMessage("");
  };

  const handleSendMessage = () => {
    // Handle sending the message logic here
    console.log("Message sent:", message);
    setMessage("");
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleAddEmoji = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  return (
    <div>
     <Button
        variant="contained"
        color="primary"
        startIcon={<Chat />}
        onClick={handleOpenChat}
        sx={{
          position: "fixed",
          left: 16,
          bottom: 16,
          zIndex: 9999,
          background: "#66023b",
          color: "white",
          height:'2rem',
          
          // Adjust positioning for smaller screens
          "@media (max-width: 768px)": {
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 16,
          },
        }}
      >
        Send us a message
      </Button>

      <Drawer
        anchor="left"
        open={isChatOpen}
        onClose={handleCloseChat}
        sx={{ zIndex: 9999 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "16px",
            background: '#66023b',
            color: "#fff",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
            <IconButton style={{color:'white'}} onClick={handleCloseChat}>
              <Close />
            </IconButton>
          </div>
          <div style={{position:'relative',top:'4rem'}}>
            <p style={{ marginBottom: 8 }}>Hi.</p>
            <p>Have any questions? Ask away!</p>
          </div>
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ marginBottom: 16,position:'relative',top:'5rem' }}
            InputProps={{
              style: {
                color: "#66023b",
                background:'white'
              },
            }}
            InputLabelProps={{
              style: {
                color: "#66023b",
              },
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <IconButton style={{color:'white'}} onClick={handleMenuClick}>
              <MoreVert />
            </IconButton>
            <IconButton style={{color:'white'}} onClick={() => handleAddEmoji("😊")}>
              <InsertEmoticon />
            </IconButton>
            <Button
              sx={{ background: "white", color: "#66023b" }}
              variant="contained"
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ChatBox;
