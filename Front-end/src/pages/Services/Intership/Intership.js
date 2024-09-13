import React from 'react'


import IntershipProcess from '../IntershipProcess'
import TryUI from '../../Courses/TryUI'
import Layout from '../../../components/Layout/Layout'
import Traininghead from './Traininghead'
import TrainingPage from '../../AboutUspages/TrainingPage'
import Whyintership from './Whyintership'
import Certificate2 from '../Certificate2'
import Placementcon1 from '../../Placement/Placementcon1'
import QuestionAns from './MCA/QuestionAns'


function Intership() {
  return (
    <Layout>
      
    <TryUI text={"Intership Training"}/>
    <Traininghead/>
      <TrainingPage/>
      <Whyintership/>
      <QuestionAns/>
      <Placementcon1/>
    <IntershipProcess/>
    <Certificate2/>
  </Layout>
  )
}

export default Intership