import React from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import StudyMap from './StudyMap'
import ContentArea from './contenetArea'
import PageFoot from '@/components/PageFoot'

const FrontEnd = () => {
  const whichPage = 'Front-End'
  const HeadColor = 'rgb(209,217,224)'
  return (
    <div className='FrontEnd'>
      <CoreSkillHead whichPage={whichPage} HeadColor={HeadColor}></CoreSkillHead>
      <StudyMap></StudyMap>
      <ContentArea></ContentArea>
      <PageFoot HeadColor={HeadColor}></PageFoot>
    </div>
  )
}

export default FrontEnd
