import React from 'react'

import Mcahead from './Mcahead'
import IntershipProcess from '../../IntershipProcess'
import TryUI from '../../../Courses/TryUI'
import Layout from '../../../../components/Layout/Layout'
import Timeduration from './Timeduration'
import QRcode from './QRcode'
import Certificate from '../../Certificate'
import Certificate2 from '../../Certificate2'
import Placementcon1 from '../../../Placement/Placementcon1'
import FeatureList from '../../../Courses/FeatureList'
import QuestionAns from './QuestionAns'
import McaApplynow from './McaApplynow'
import ServiceEnquiry from '../../ServiceEnquiry'
import McaEnquriy from '../../McaEnquriy'

function Intership() {
  return (
    <Layout>

    <TryUI text={"MASTER OF COMPUTER APPLICATIONS"}/>
    <Mcahead/>
    <McaEnquriy/>
    {/* <Timeduration/> */}
    <FeatureList/>
    <QuestionAns/>
    <Placementcon1/>
    
    <Certificate2/>
    
    <QRcode/>
   
    {/* <McaApplynow/> */}
    {/* <IntershipProcess/> */}
  </Layout>
  )
}

export default Intership