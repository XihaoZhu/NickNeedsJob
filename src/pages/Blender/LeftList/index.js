import React from 'react'
import './index.scss'

const List = () => {
  const fromCourse = [
    require('../../../assets/Blender/example1.png'),
    require('../../../assets/Blender/example2.png'),
    require('../../../assets/Blender/example3.png'),
    require('../../../assets/Blender/example4.png'),
    require('../../../assets/Blender/example5.png'),
    require('../../../assets/Blender/example6.png'),
    require('../../../assets/Blender/example7.png'),
    require('../../../assets/Blender/example8.png')
  ]
  return (
    <div className="LeftList">
      {fromCourse.map((item, index) => {
        return (
      <div key={index} className='example' style={{ backgroundImage: `url(${item})`, backgroundSize: 'cover' }}>
      </div>)
      })}
    </div>
  )
}

export default List
