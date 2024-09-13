import React from 'react'
import Layout from '../../components/Layout/Layout'
import TryUI from './TryUI'
import Whyjava from './Whyjava'
import JavaTrainingMethodlogy from './JavaTrainingMethodlogy'
import Javadetails from './Javadetails'
import Overview from './Overview'
import EnrollBox from './EnrollBox'
import Imgcon from './Imgcon'
import FeatureList from './FeatureList'

function JavaProgram() {
  return (
    <Layout>
    <TryUI text={"Java Full Stack"}/>
    <Imgcon/>
    <Overview/>
    <FeatureList/>
    <Whyjava/>
        <JavaTrainingMethodlogy/>
        
       

</Layout>
  )
}

export default JavaProgram