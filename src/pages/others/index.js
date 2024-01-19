import React from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import PageFoot from '@/components/PageFoot'

const Others = () => {
  const HeadColor = 'rgb(221,208,192)'
  const content = [
    {
      background: require('../../assets/OthersPic/modeling.png'),
      words: 'This is one of 3D printing work for the feet I built during the internship. In undergranduate, I had a course of 3D modeling software 3Dexperience, I also self-trained the basic using of Solidworks. Blender, which was seperately showed before, is also a modeling software, while it more used for visual things not industry.',
      title: 'Modeling'
    },
    {
      background: '',
      words: '',
      title: 'Matlab'
    },
    {
      background: '',
      words: ''
    },
    {
      background: '',
      words: ''
    }
  ]
  return (
    <>
    <CoreSkillHead HeadColor={HeadColor}></CoreSkillHead>
    <div className='Others'>
      {content.map((item, index) => (
        <div className='item' key={index}>
        <div className='background' style={{ backgroundImage: `url(${item.background})` }}></div>
        <h3>{item.title}</h3>
        <div className='words'>{item.words}</div>
        </div>
      ))}
    </div>
    <PageFoot HeadColor={HeadColor}></PageFoot>
    </>
  )
}

export default Others
