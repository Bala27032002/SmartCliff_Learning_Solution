import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact/Contact";


import CardList from "./pages/CardList";
import AboutUs from "./pages/AboutUspages/AboutUs";

import Services from "./pages/Services/Services";
import Placement from "./pages/Placement/Placement";
import ProgrammingLanguages from "./pages/Courses/ProgrammingLanguages";
import SoftwareTesting from "./pages/Courses/Testing/SoftwareTesting";
import EmbeddedSoftware from "./pages/Courses/Embedded/EmbeddedSoftware";
import Register from "./pages/Register";
import MainRegister from "./pages/MainRegister";
import Hirefrom from "./pages/Hirefrom";
import Intership from "./pages/Services/Intership/Intership";
import MCA from "./pages/Services/Intership/MCA/MCA";
import EnquiryForm from "./pages/EnquiryForm";
import HireUs2 from "./pages/HireUs2";
import HTD from "./pages/Services/HTD/HTD";
import Institutional from "./pages/Services/Institutional/Institutional";
import Lateral from "./pages/Services/Lateral/Lateral";
import JavaProgram from "./pages/Courses/JavaProgram";
import Pythonprogram from "./pages/Courses/Pythonprogram";
// import Adminpage from "./components/Adminpage";

import Reduxcourse from "./components/Reduxcourse";

import Joinusform from "./pages/Joinusform";
import AddminDashboard from "./components/AddminDashboard";







function App() {
  const containerStyle={
    backgroundsize:'cover',
    backgroundRepeat:'no-repeat',
  
    backgroundColor:'#fff0fb'
  }
  return (
    <>
    <div className="App" style={containerStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mca" element={<MCA />} />
         

          <Route path="/program" element={<ProgrammingLanguages />} />
          <Route path="/embedded" element={<EmbeddedSoftware />} />
          <Route path="/testing" element={<SoftwareTesting />} />
          <Route path="/services" element={<Services />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/MainRegister" element={<MainRegister />} />
          <Route path="/hire" element={<Hirefrom />} />
          <Route path="/htd" element={<HTD />} />
          <Route path="/mca" element={<MCA />} />
          <Route path="/Institutional" element={<Institutional />} />
          <Route path="/lateral" element={<Lateral />} />
          <Route path="/intership" element={<Intership />} />
          
          <Route path="/Enquiry" element={<EnquiryForm/>} />
          <Route path="/Hireus" element={<HireUs2/>} />
          <Route path="/java" element={<JavaProgram/>} />
          <Route path="/python" element={<Pythonprogram/>} />
          <Route path="/adminpage" element={<AddminDashboard/>} />
          <Route path="/course" element={<Reduxcourse />} />
          <Route path="/joinus" element={<Joinusform />} />
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
