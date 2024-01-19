import './index.scss'
import React, { useEffect, useRef } from 'react'

const Title = () => {
  const description = useRef(null)
  const str = `Hi here is Nick, what you are viewing now is the website built to introduce himself. This project <br/>
               is done by Nick on his own with front end structure React. He did all the work, from designs <br/>
               to codes. (That's why the design may bot look fancy XD) He used no any components <br/>
               from third-party library but cleared the default style with bootstrap, only at<br/>
               this page. (He planned to use bootstrap at beginning but then <br/>
               determined to write all codes himself, but the default style <br/>
               already get influenced and have to be kept.) <br/>
               <a href='https://github.com/XihaoZhu/NickNeedsJob'>Here</a> you can download the <br/>
               developing files for checking.`
  let i = 0
  function divTyping (target) {
    if (i <= str.length) {
      target.innerHTML = str.slice(0, i++) + '_'
      setTimeout(() => divTyping(target), 25)
    } else {
      target.innerHTML = str
    }
  }

  useEffect(() => {
    divTyping(description.current)
  }, [])

  return (
    <div className='Title'>
      <div className='logo'>
      <img src={require('src/assets/images/NNJ_logo.png')} className='logoImg'></img>
      <span>Nick Needs Jobs</span>
      </div>
      <div className='description' ref={description}>
      {/* Hi here is Nick, what you are viewing now is the website built to introduce himself.
      This project is done by Nick on his own with front end structure React.
      He did all the work from designs to codes.
      (That's why it doesn't look fancy XD)
      He used no any components from third party but cleared the default style, only at this page, with bootstrap.
      (He planned to use bootstrap at beginning but then determined write all codes himself, but the default style already get influenced and have to be kept.)
      <a href=''>Here</a> you can download the developing files for checking */}
      </div>
    </div>
  )
}

export default Title
