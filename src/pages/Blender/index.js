import React, { useState } from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import RightList from './RightList'
import LeftList from './LeftList'
import Screen from './screen'
import PageFoot from '@/components/PageFoot'

const Blender = () => {
  const whichPage = 'Blender'
  const HeadColor = '#FFB578'
  const [showWhich, setShowWhich] = useState(-1)
  function setWhich (which) {
    setShowWhich(which)
  }
  return (
    <>
    <CoreSkillHead whichPage={whichPage} HeadColor={HeadColor}></CoreSkillHead>
    <div className='Blender'>
      <LeftList setWhich={setWhich}></LeftList>
      <Screen showWhich={showWhich}></Screen>
      <RightList setWhich={setWhich}></RightList>
    </div>
    <PageFoot HeadColor={HeadColor}></PageFoot>
    </>
  )
}

export default Blender
