import React from 'react'
import TryUI from '../TryUI'
import Layout from '../../../components/Layout/Layout';
import Embeddedcon1 from './Embeddedcon1';
import Aboutpro from '../Aboutpro';
import SelectEmbedded from './SelectEmbedded';

function EmbeddedSoftware() {
  return (
    <Layout>
    <TryUI  text={"EmbeddedSoftware"}/>
    <Embeddedcon1/>
    {/* <SelectEmbedded/> */}
    <Aboutpro/>
  </Layout>
  )
}

export default EmbeddedSoftware;