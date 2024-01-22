import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'

const CoreSkillHead = ({ whichPage, HeadColor }) => {
  const navi = useNavigate()
  const backHome = () => {
    navi('/')
    setTimeout(() => {
      window.scrollTo(0, document.documentElement.scrollHeight * 0.6)
    }, 0)
  }
  return (
    <div className='CoreSkillHead' style={{ backgroundColor: HeadColor }}>
      <img className='logo' src={require('@/assets/images/NNJ_logo.png')} onClick={() => backHome()}
      ></img>
      <div className='title'>
        {whichPage}
      </div>
    </div>
  )
}

export default CoreSkillHead
