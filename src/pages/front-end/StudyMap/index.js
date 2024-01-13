import React, { useState } from 'react'
import './index.scss'
import classNames from 'classnames'

const StudyMap = ({ changeWhichOne }) => {
  const [whichActive, setWhichActive] = useState(0)
  const OnActive = (index) => {
    setWhichActive(index)
    changeWhichOne(index)
  }
  const content = [
    'start',
    'HTML',
    'CSS',
    'Mobile Response',
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
