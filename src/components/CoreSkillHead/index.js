import React from 'react'
import './index.scss'

const CoreSkillHead = ({ whichPage, HeadColor }) => {
  return (
    <div className='CoreSkillHead' style={{ backgroundColor: HeadColor }}>
      <img className='logo' src={require('@/assets/images/NNJ_logo.png')}
      ></img>
      <div className='title'>
        {whichPage}
      </div>
    </div>
  )
}

export default CoreSkillHead
