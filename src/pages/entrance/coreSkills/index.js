import './index.scss'
import React, { useEffect, useRef } from 'react'

const CoreSkills = ({ offerWhere2, windowWidth }) => {
  // get the dom and pass the height
  const Core = useRef(null)
  useEffect(() => {
    offerWhere2(Core.current.offsetTop)
  }, [windowWidth])
  return (
    <div className='CoreSkills' ref={Core}>
      <div className='container'>
        <div className='FrontEnd'></div>
        <div className='Blender'></div>
        <div className='Photoshop'></div>
        <div className='Others'></div>
      </div>
    </div>
  )
}

export default CoreSkills
