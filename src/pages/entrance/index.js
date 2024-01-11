import React from 'react'
import './index.scss'
import Head from '@/components/Header'
import PageFoot from '@/components/PageFoot'
import Title from './title'
import Experience from './experience'
import CoreSkills from './coreSkills'

const Entrance = () => {
  return (
  <div style={{ backgroundColor: 'rgb(218,227,230,0.25)' }}>
    <Head/>
    <Title/>
    <Experience/>
    <CoreSkills/>
    <PageFoot/>
  </div>
  )
}

export default Entrance
