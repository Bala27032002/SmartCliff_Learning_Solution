import React from 'react'
import Layout from '../../../components/Layout/Layout'
import TryUI from '../../Courses/TryUI'
import Htd1 from './Htd1'

import Certificate2 from '../Certificate2'
import Imgcon from '../../Courses/Imgcon'
import HTDhead from './HTDhead'
import SkillsComponent from './SkillsComponent'
import Placementcon1 from '../../Placement/Placementcon1'
import InclusiveThinkingComponent from '../Institutional/InclusiveThinkingComponent'
import ServiceEnquiry from '../ServiceEnquiry'

function HTD() {
  return (
    <Layout>
      <TryUI text={"Hire-Train-Deploy "}/>
      <HTDhead/>
      <ServiceEnquiry/>
      {/* <InclusiveThinkingComponent/> */}
      <Htd1/>
      <SkillsComponent/>
      {/* <Placementcon1/> */}
      {/* <Certificate2/> */}
    </Layout>
  )
}

export default HTD