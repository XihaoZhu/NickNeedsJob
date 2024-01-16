import React, { useEffect, useState } from 'react'
import './index.scss'
import Head from '@/pages/entrance/Header'
import PageFoot from '@/components/PageFoot'
import Title from './title'
import Experience from './experience'
import CoreSkills from './coreSkills'

const Entrance = () => {
  // getlocations again when window resize
  const [windowWidth, changedWindowWidth] = useState(0)
  useEffect(() => {
    const windowWidthChanged = () => {
      changedWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', windowWidthChanged)
  }, [])

  // get the locations
  const [where1, setWhere1] = useState(0)
  const [where2, setWhere2] = useState(0)
  function offerWhere1 (num) {
    setWhere1(num)
  }
  function offerWhere2 (num) {
    setWhere2(num)
  }

  return (
  <div className='entrance'>
    <Head where1={where1} where2={where2}/>
    <Title/>
    <Experience offerWhere1={offerWhere1} windowWidth={windowWidth}/>
    <CoreSkills offerWhere2={offerWhere2} windowWidth={windowWidth}/>
    <PageFoot HeadColor={'rgb(250,199,183)'}/>
  </div>
  )
}

export default Entrance
