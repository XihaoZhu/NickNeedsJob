import React from 'react'
import './index.sass'
import BreadCrumb from '@/components/BreadCrumb'
import PageFoot from '@/components/PageFoot'
import Title from './title'
import Experience from './experience'
import CoreSkills from './coreSkills'

const Entrance = () => {
  return (
  <div style={{ backgroundColor: 'rgb(218,227,230,0.25)' }}>
    <BreadCrumb/>
    <Title/>
    <Experience/>
    <CoreSkills/>
    <PageFoot/>
  </div>
  )
}

export default Entrance
