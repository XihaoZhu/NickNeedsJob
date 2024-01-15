import React from 'react'
import './index.scss'

const Screen = ({ showWhich }) => {
  const list = [
    require('../../../assets/Blender/example1.png')
  ]
  return (
    <>
    <div className="Screen">
      <img src={list[0]}></img>
    </div>
    </>
  )
}

export default Screen
