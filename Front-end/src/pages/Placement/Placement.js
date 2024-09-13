import React from 'react'
import Layout from '../../components/Layout/Layout';
import Placementcon1 from './Placementcon1';
import Placementhead from './Placementhead';
import CompanyLogoCarousel from './CompanyLogoCarousel';
import Scroll from '../Scroll';
import YourComponent from './YourComponent';
import TestimonialPage from '../TestimonialPage';
import Placedemployee from './Placedemployee';
import TryUI from '../Courses/TryUI';
import Certificate from '../Services/Certificate';
import Placementcards from './Placementcards';
import CenteredText from './CenteredText';
import Placementcompany from './Placementcompany';
import Interview from '../Interview';

function Placement() {
  return (
    <Layout>
       <TryUI text={"Placement"} />
      <Placementhead/>
      <Placementcompany/>
      {/* <Scroll/> */}
      {/* <YourComponent/> */}
      {/* <CompanyLogoCarousel/> */}
      <Placementcards/> 
      <Interview/>
    {/* <Placementcon1/> */}
    {/* <TestimonialPage/> */}
    <CenteredText/>
    <Placedemployee/>
    {/* <Certificate/> */}
    </Layout>
  )
}

export default Placement