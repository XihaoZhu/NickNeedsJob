import React from 'react'
import './index.scss'

const Screen = ({ showWhich }) => {
  const list = [
    require('../../../assets/Blender/example1.png'),
    require('../../../assets/BlenderPage/example2.gif'),
    require('../../../assets/BlenderPage/example3.gif'),
    require('../../../assets/BlenderPage/example4.gif'),
    require('../../../assets/BlenderPage/example5.gif'),
    require('../../../assets/BlenderPage/example6.gif'),
    require('../../../assets/BlenderPage/example7.gif'),
    require('../../../assets/BlenderPage/example8.gif'),
    require('../../../assets/BlenderPage/example9.png'),
    require('../../../assets/BlenderPage/example10.png'),
    require('../../../assets/BlenderPage/example11.png'),
    require('../../../assets/BlenderPage/example12.gif')
  ]
  return (
    <>
    <div className="Screen">
      {showWhich !== -1
        ? <img src={list[showWhich]}></img>
        : (
        <div className='introduction'>
          <h2>Some practices I have done</h2>
          <br/>
          <span> Here I would show you some practices I have done with blender. Unfortunately for quicker loading, files qualities here are all under compression and are in GIF format, but you still need to wait for seconds for the loading. <br/><br/>
            On the left hand side, there show 8 works I produced, followed instructions on Internet but also combined with my own ideas. <br/><br/>
            On right hand side, I selected 4 original works : Refer to the classic Chanel N°5; Refer to a cup I own; hair material and practice of liquid.
          </span>
        </div>
          )}
    </div>
    </>
  )
}

export default Screen
