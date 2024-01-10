import './index.scss'
import React from 'react'

const Title = () => {
  return (
    <div className='Title'>
      <div className='logo'>
      <img src={require('src/assets/images/NNJ_logo.png')} className='logoImg'></img>
      <span>Nick Needs Jobs</span>
      </div>
    </div>
  )
}

export default Title
