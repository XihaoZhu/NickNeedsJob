import React from 'react'
import './index.scss'

const RightList = ({ setWhich }) => {
  const fromNick = [
    require('../../../assets/Blender/example9.png'),
    require('../../../assets/Blender/example10.png'),
    require('../../../assets/Blender/example11.png'),
    require('../../../assets/Blender/example12.png')
  ]
  return (
    <div className="RightList">
      {fromNick.map((item, index) => {
        return (
      <div key={index} className='example' style={{ backgroundImage: `url(${item})`, backgroundSize: 'cover' }} onMouseEnter={() => setWhich(index + 8)} onMouseLeave={() => setWhich(-1)}>
      </div>)
      })}
    </div>
  )
}

export default RightList
