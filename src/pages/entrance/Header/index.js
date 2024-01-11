import './index.scss'
import React, { useState } from 'react'
import classNames from 'classnames'

const Head = () => {
// Name of the tiltles
  const titles = [
    'Start',
    'Education/Working Experience',
    'Core skills'
  ]

  // click to change the active item.
  const [NickActive, setNickActive] = useState(0)
  function changeActive (number) {
    setNickActive(number)
  }

  // Click to scroll to the right location
  function scrollTo (e) {
    console.log(e)
  }

  return (
    <div className='Header'>
      <ol className="header">
        {titles.map((item, index) => <li className={classNames('header-item', { 'nick-active': index === NickActive })} key={index} onClick={(e) => { changeActive(index); scrollTo(e) }}>{item}</li>
        )}
      </ol>
    </div>
  )
}

export default Head
