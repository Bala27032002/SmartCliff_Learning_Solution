import React from "react";
import Layout from '../../components/Layout/Layout';
import IntershipProcess from "./IntershipProcess";
import TryUI from "../Courses/TryUI";

const Services = () => {
  return (
    <Layout>
      <TryUI text={"Services"}/>
      <IntershipProcess/>
    </Layout>
  );
};

export default Services;
