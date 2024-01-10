import './index.scss'
import React, { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.js'
import classNames from 'classnames'

const BreadCrumb = () => {
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

  return (
    <div className='BreadCrumb'>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {titles.map((item, index) => <li className={classNames('breadcrumb-item', { 'nick-active': index === NickActive })} key={index} onClick={() => changeActive(index)}>{item}</li>
        )}
      </ol>
    </nav>
    </div>
  )
}

export default BreadCrumb
