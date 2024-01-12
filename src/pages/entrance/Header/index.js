import './index.scss'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

const Header = ({ where1, where2 }) => {
// Name of the tiltles
  const titles = [
    'Start',
    'Education/Working Experience',
    'Core skills'
  ]

  // click to change the active item and scroll to the right position
  const [NickActive, setNickActive] = useState(0)
  function changeActive (number) {
    setNickActive(number)
    switch (true) {
      case number === 0:
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        break
      case number === 1:
        window.scrollTo({
          top: where1 * 0.85,
          behavior: 'smooth'
        })
        break
      case number === 2:
        window.scrollTo({
          top: where2 * 0.9,
          behavior: 'smooth'
        })
        break
    }
  }

  // auto active at places
  useEffect(() => {
    function handleScroll () {
      switch (true) {
        case window.scrollY < 0.85 * where1:
          setNickActive(0)
          break
        case window.scrollY >= 0.9 * where2:
          setNickActive(2)
          break
        case window.scrollY >= 0.85 * where1:
          setNickActive(1)
          break
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [where1, where2])

  return (
    <div className='Header'>
      <ol className="header">
        {titles.map((item, index) => <li className={classNames('header-item', { 'nick-active': index === NickActive })} key={index} onClick={() => changeActive(index)}>{item}</li>
        )}
      </ol>
    </div>
  )
}

export default Header
