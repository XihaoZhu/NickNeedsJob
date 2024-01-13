import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'

const CoreSkillHead = ({ whichPage, HeadColor }) => {
  const navi = useNavigate()
  return (
    <div className='CoreSkillHead' style={{ backgroundColor: HeadColor }}>
      <img className='logo' src={require('@/assets/images/NNJ_logo.png')} onClick={() => navi('/')}
      ></img>
      <div className='title'>
        {whichPage}
      </div>
    </div>
  )
}

export default CoreSkillHead
