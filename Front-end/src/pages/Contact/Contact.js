import React from "react";
import Layout from "./../../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Contactcontent from "./Contactcontent";
import SignupForm from "../SignupForm";
import LocationMap from "./LocationMap";
import Contactpage from "../Contactpage";
import GoogleMapEmbed from "./GoogleMapEmbed";
import ContactSection from "./ContactSection";

const Contact = () => {
  return (
    <Layout>
     {/* <Contactcontent/> */}
     <Contactpage/>
    
     {/* <ContactSection/> */}
     {/* <SignupForm/> */}
     {/* <LocationMap/> */}
    </Layout>
  );
};

export default Contact;
