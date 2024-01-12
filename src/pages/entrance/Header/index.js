import './index.scss'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

const Head = ({ where1, where2 }) => {
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

  // auto active at places
  useEffect(() => {
    function handleScroll () {
      switch (true) {
        case window.scrollY < 0.8 * where1:
          setNickActive(0)
          break
        case window.scrollY >= 0.8 * where2:
          setNickActive(2)
          break
        case window.scrollY >= 0.8 * where1:
          setNickActive(1)
          break
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [where1, where2])

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
