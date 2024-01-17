import React from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import PageFoot from '@/components/PageFoot'

const Others = () => {
  const HeadColor = 'rgb(221,208,192)'
  const content = [
    {
      background: require('../../assets/images/NNJ_logo.png'),
      words: `Main courses were around mathmatics and physics.
      Logical thinking was trianed, improved myself in how to learn.
      Gained team working experiences.
      Besides the theoritical learning, also got chances leanring relative skills.
      (Check in Core Skills - others for more information)`
    },
    {
      background: '',
      words: ''
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
        <div className='words'>{item.words}</div>
        </div>
      ))}
    </div>
    <PageFoot HeadColor={HeadColor}></PageFoot>
    </>
  )
}

export default Others
