import React from 'react'
import Layout from '../../../components/Layout/Layout'
import TryUI from '../../Courses/TryUI'
import InstitutionalHead from './InstitutionalHead'
import ServicesComponent from './ServicesComponent'
import Certificate2 from '../Certificate2'

import SkillsComponent2 from './SkillsComponent2'
import StepsComponent from './StepsComponent'
import Placementcon1 from '../../Placement/Placementcon1'
import QuestionAns from '../Intership/MCA/QuestionAns'
import ServiceEnquiry from '../ServiceEnquiry'

export default function Institutional() {
  return (
    <Layout>
      <TryUI text={"Institutional Training "}/>
      <InstitutionalHead/>
      <ServiceEnquiry/>
      <SkillsComponent2/>
      <QuestionAns/>
      <Placementcon1/>
      <StepsComponent/>
      {/* <Certificate2/> */}
      {/* <ServicesComponent/> */}
    </Layout>
  )
}
