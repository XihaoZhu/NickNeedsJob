import React from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'

const FrontEnd = () => {
  const whichPage = 'Front-End'
  const HeadColor = 'rgb(209,217,224)'
  return (
    <div className='FrontEnd'>
      <CoreSkillHead whichPage={whichPage} HeadColor={HeadColor}></CoreSkillHead>
    </div>
  )
}

export default FrontEnd
