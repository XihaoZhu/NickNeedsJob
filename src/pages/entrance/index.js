import React from 'react'
import './index.scss'
import Head from '@/pages/entrance/Header'
import PageFoot from '@/components/PageFoot'
import Title from './title'
import Experience from './experience'
import CoreSkills from './coreSkills'

const Entrance = () => {
  return (
  <div className='entrance'>
    <Head/>
    <Title/>
    <Experience/>
    <CoreSkills/>
    <PageFoot/>
  </div>
  )
}

export default Entrance
