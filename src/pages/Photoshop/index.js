import React from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import PageFoot from '@/components/PageFoot'

const PhotoShop = () => {
  const whichPage = 'Blender'
  const HeadColor = '#5F979E'
  return (
    <>
    <CoreSkillHead whichPage={whichPage} HeadColor={HeadColor}></CoreSkillHead>
    <div className='PhotoShop'>
      <div className='content'>

      </div>
      <div className='PicCountainer'>

      </div>
    </div>
    <PageFoot HeadColor={HeadColor}></PageFoot>
    </>
  )
}

export default PhotoShop
