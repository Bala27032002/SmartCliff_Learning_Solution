import React from 'react'
import Layout from '../../components/Layout/Layout'
import TryUI from './TryUI'
import JavaProgram from './JavaProgram'
import Javadetails from './Javadetails'
import PythonOverview from './PythonOverview'
import WhyPython from './WhyPython'
import PythonTrainingMethodlogy from './PythonTrainingMethodlogy'
import Enroll from '../Enroll'
import EnrollBox from './EnrollBox'
import Imgcon from './Imgcon'
import FeatureList from './FeatureList'

function Pythonprogram() {
  return (
    <Layout>
    <TryUI text={"Python Full Stack"}/>
    {/* <Javadetails/> */}
    <Imgcon/>
    <PythonOverview/>
    <FeatureList/>
    <WhyPython/>
    <PythonTrainingMethodlogy/>
    
    </Layout>
  )
}

export default Pythonprogram