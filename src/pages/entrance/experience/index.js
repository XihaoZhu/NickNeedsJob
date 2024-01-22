import './index.scss'
import React, { useEffect, useRef, useState } from 'react'

const Experience = ({ offerWhere1, windowWidth }) => {
  // control the lights
  const [isOn, setIsOn] = useState(0)
  function turnLightOn (whichOne) {
    setIsOn(whichOne)
  }

  // control the show of key words
  const [whichKeyword, setWhichKeyword] = useState([0, 0, 0, 0, 0])
  function selectKeyWord (num) {
    const arry = [...whichKeyword]
    arry.splice(num, 1, 1)
    setWhichKeyword(arry)
  }
  function unSelectKeyword () {
    setWhichKeyword([0, 0, 0, 0, 0])
    console.log(whichKeyword)
  }

  // get the dom and pass the height
  const Exp = useRef(null)
  useEffect(() => {
    offerWhere1(Exp.current.offsetTop)
  }, [windowWidth])

  return (
    <div className='Experience' ref={Exp}>
      {/* left side */}
      <div className='left' onClick={(e) => turnLightOn(1)}>
        {/* lights on or off */}
        <img src={isOn === 1 ? require('../../../assets/images/bulb.png') : require('../../../assets/images/bulbOff.png')} style={{ top: isOn === 1 ? '47vw' : '46vw' }}></img>
        {/* when the other light on and hovered on key words */}
        <div className='extraIntern' style={{ opacity: whichKeyword[2] }}>
          Telemarketing:<br/>
          A part-time job as a telemarketer in a children&apos;s art training institution.
          Not doing scam! But to invite parents taking their children to try the free trial lesson.
          Sometimes leafleted in street too.
          Learnt skills how to communicate with custormers and advertisement during the work.
        </div>
        <div className='extraIntern' style={{ opacity: whichKeyword[3] }}>
          In a barber shop:<br/>
          Worked in barber shop as an apprentice for a month. Learnt how to wash hair and basic massage skills for head included too.
          Trained my patience <br/>
          ...and finger flexibility? XD
        </div>
        <div className='extraIntern' style={{ opacity: whichKeyword[4] }}>
          Had a two months internship in this company.
          One of the two main roles was operating machine, communicate with remote team to fine-tune it. The other was designing and built a pair of high-arch models and a pair of flat-foot models for testing the machine.
          Learnt communication between different teams and practised his modeling skill.
        </div>
        {/* main content */}
        <div className='EducationHistory' style={{ opacity: isOn === 1 ? 0.8 : 0 }}>
         {isOn === 1 && <>
            <div>2018.9 – 2022.5<br/>
            <span className='undergranduate' onMouseEnter={() => selectKeyWord(0)} onMouseLeave={() => unSelectKeyword()}>B. Eng Aerospace Engineering</span> University of Nottingham, Ningbo, China</div>
            <div>2022.9 – 2023.12<br/>
            <span className='master' onMouseEnter={() => selectKeyWord(1)} onMouseLeave={() => unSelectKeyword()}>MSc Aerospace Engineering</span> University  of Manchester</div><br/>
          </>
          }
        </div>
        {isOn === 1 ||
          <div className='EduTitle'>
            Education <br/>
            History
          </div>}
      </div>
      <div className='middle'></div>
      {/* right side */}
      <div className='right' onClick={() => turnLightOn(2)}>
        {/* light on or off */}
        <img src={isOn === 2 ? require('../../../assets/images/bulb.png') : require('../../../assets/images/bulbOff.png')} style={{ top: isOn === 2 ? '47vw' : '46vw' }}></img>
        {/* when the other light on and hovered on key words */}
        <div className='extraIntern' style={{ opacity: whichKeyword[0] }}>
          Undergranduate:<br/>
          Main courses were around mathmatics and physics.
          Logical thinking was trianed, improved himself in how to learn.
          Gained team working experiences.
          Besides the theoritical learning, also got chances leanring relative skills.
          (Check in Core Skills - others for more information)
        </div>
        <div className='extraIntern' style={{ opacity: whichKeyword[1] }}>
          Master:<br/>
          First time being abroad, new environment and new chanllanges.
          An extension for my undergranduate study (physics and mathmatics still mostly).
          More relative skills were trained.
          (Also check in Core Skills - others for more information)
        </div>
        {/* main content */}
        <div className='InternHistory' style={{ opacity: isOn === 2 ? 0.8 : 0 }}>
         {isOn === 2 && <>
          <div>2018.7 – 2018.8<br/>
          Part-time job <span className='telemarketing' onMouseEnter={() => selectKeyWord(2)} onMouseLeave={() => unSelectKeyword()}>Telemarketing</span></div>
          <div>2019.7 – 2019.8<br/>
          Part-time job <span className='barber' onMouseEnter={() => selectKeyWord(3)} onMouseLeave={() => unSelectKeyword()}>barber</span> shop</div>
          <div>2021.7 – 2021.8<br/>
          <span className='internship' onMouseEnter={() => selectKeyWord(4)} onMouseLeave={() => unSelectKeyword()}>Internship</span> in 宁波三体职能科技有限公司, China</div>
          </>
          }
        </div>
        {isOn === 2 ||
          <div className='InternTitle'>
            Internship <br/>
            History
          </div>}
      </div>
    </div>
  )
}

export default Experience
