import React from 'react'
import './index.scss'

const List = () => {
  const fromCourse = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]
  return (
    <div className="LeftList">
      {fromCourse.map((item, index) => {
        return (
      <div key={index} className='example' style={{ backgroundImage: `url(${require('../../../assets/Blender/ThreeGuys.png')})`, backgroundSize: 'cover' }}>
      </div>)
      })}
    </div>
  )
}

export default List
