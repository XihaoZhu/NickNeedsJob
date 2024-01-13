import React, { useState } from 'react'
import './index.scss'
import classNames from 'classnames'

const StudyMap = () => {
  const [whichActive, setWhichActive] = useState(0)
  const OnActive = (index) => {
    setWhichActive(index)
  }
  const content = [
    'start',
    'HTML',
    'CSS',
    'CSS for Mobile',
    'JavaScript',
    'Git',
    'AJAX',
    'NodeJs',
    'Vue2',
    'Vue3',
    'React',
    'TypeScript'
  ]

  return (
    <div className='StudyMap'>
        {content.map((item, index) => <div key={index} className={classNames('each', { active: index === whichActive })} onClick={() => OnActive(index)}>{item}</div>)}
    </div>
  )
}

export default StudyMap
