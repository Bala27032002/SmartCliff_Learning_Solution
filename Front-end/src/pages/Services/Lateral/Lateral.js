import React from 'react'
import Layout from '../../../components/Layout/Layout'
import TryUI from '../../Courses/TryUI'

import QuestionAns from '../Intership/MCA/QuestionAns'
import Placementcon1 from '../../Placement/Placementcon1'
import Certificate2 from '../Certificate2'
import Lateralhead from './Lateralhead'
import StepsComponent2 from '../Institutional/StepsComponent2'
import LateralEnquiry from '../LateralEnquiry'
function Lateral() {
  return (
    <Layout>
      <TryUI  text={"Lateral Traing"}/>
      <Lateralhead/>
      <LateralEnquiry/>
      <QuestionAns/>
      <Placementcon1/>
      <StepsComponent2/>
      {/* <Certificate2/> */}
    </Layout>
  )
}

export default Lateral