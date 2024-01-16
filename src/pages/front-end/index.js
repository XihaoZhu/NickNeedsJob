import React, { useState } from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import StudyMap from './StudyMap'
import ContentArea from './contenetArea'
import PageFoot from '@/components/PageFoot'

const FrontEnd = () => {
  const whichPage = 'Front-End'
  const HeadColor = '#FF7363'
  const [whichOne, setWhichOne] = useState(0)
  function changeWhichOne (num) {
    setWhichOne(num)
  }
  return (
    <>
    <CoreSkillHead whichPage={whichPage} HeadColor={HeadColor}></CoreSkillHead>
    <div className='FrontEnd'>
      <StudyMap changeWhichOne={changeWhichOne}></StudyMap>
      <ContentArea whichOne={whichOne}></ContentArea>
    </div>
    <PageFoot HeadColor={HeadColor}></PageFoot>
    </>
  )
}

export default FrontEnd
