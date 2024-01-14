import React from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import RightList from './RightList'
import LeftList from './LeftList'
import Screen from './screen'
import PageFoot from '@/components/PageFoot'

const Blender = () => {
  const whichPage = 'Blender'
  const HeadColor = '#FFB578'
  return (
    <>
    <CoreSkillHead whichPage={whichPage} HeadColor={HeadColor}></CoreSkillHead>
    <div className='Blender'>
      <LeftList></LeftList>
      <Screen></Screen>
      <RightList></RightList>
    </div>
    <PageFoot HeadColor={HeadColor}></PageFoot>
    </>
  )
}

export default Blender
