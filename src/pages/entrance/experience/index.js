import './index.scss'
import React, { useState } from 'react'

const Experience = () => {
  const [isOn, setIsOn] = useState(0)
  function turnLightOn (whichOne) {
    setIsOn(whichOne)
  }

  return (
    <div className='Experience'>
      <div className='left' onClick={() => turnLightOn(1)}>
        <img src={require('../../../assets/images/bulb.png')} style={{ top: isOn === 1 ? '47vw' : '46vw' }}></img>
          <div className='EducationHistory' style={{ opacity: isOn === 1 ? 0.8 : 0 }}>
           {isOn === 1 && <>
              <div>2022.9 – 2023.12<br/>
              <span className='master'>MSc Aerospace Engineering</span> University  of Manchester</div><br/>
              <div>2018.9 – 2022.5<br/>
              <span className='undergranduate'>B. Eng Aerospace Engineering</span> University of Nottingham, Ningbo, China</div>
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
      <div className='right' onClick={() => turnLightOn(2)}>
        <img src={require('../../../assets/images/bulb.png')} style={{ top: isOn === 2 ? '47vw' : '46vw' }}></img>
          <div className='InternHistory' style={{ opacity: isOn === 2 ? 0.8 : 0 }}>
           {isOn === 2 && <>
            <div>2018.7 – 2018.8<br/>
            Part-time job <span className='telemarketing'>Telemarketing</span></div>
            <div>2019.7 – 2019.8<br/>
            Part-time job <span className='barber'>barber</span> shop</div>
            <div>2021.7 – 2021.8<br/>
            <span className='internship'>Internship</span> in 宁波三体职能科技有限公司, China</div>
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
