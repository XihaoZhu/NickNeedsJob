import React, { useState } from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import StudyMap from './StudyMap'
import ContentArea from './contenetArea'
import PageFoot from '@/components/PageFoot'

const FrontEnd = () => {
  const whichPage = 'Front-End'
  const HeadColor = 'rgb(209,217,224)'
  const [whichOne, setWhichOne] = useState(0)
  function changeWhichOne (num) {
    setWhichOne(num)
  }
  return (
    <div className='FrontEnd'>
      <CoreSkillHead whichPage={whichPage} HeadColor={HeadColor}></CoreSkillHead>
      <StudyMap changeWhichOne={changeWhichOne}></StudyMap>
      <ContentArea whichOne={whichOne}></ContentArea>
      <PageFoot HeadColor={HeadColor}></PageFoot>
    </div>
  )
}

export default FrontEnd
