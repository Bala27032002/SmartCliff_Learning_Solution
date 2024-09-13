import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import WhatsAppIcon from "./WhatsAppIcon";
import ChatBox from "../../pages/ChatBox";
// import Section from "./Section";

const Layout = ({ children }) => {
  return (
    <>
   {/* <Section/> */}
      <Header />
      
      <div>{children}</div>
      {/* <ChatBox/> */}
      {/* <WhatsAppIcon/> */}
      <Footer />
    </>
  );
};

export default Layout;
