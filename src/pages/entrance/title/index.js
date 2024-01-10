import './index.scss'
import React from 'react'

const Title = () => {
  return (
    <div className='Title'>
      <div className='logo'>
      <img src={require('src/assets/images/NNJ_logo.png')} className='logoImg'></img>
      <span>Nick Needs Jobs</span>
      </div>
      <div className='description'>
      What you are viewing now is a website produced by Nick himself, aiming to find a <br/>
      position in the front-end field. This website is built with a React structure <br/>
      and is designed for desktop devices. Click <a href=''>here</a> to view the <br/>
      website built with Vue for mobile devices. Click <br/>
      <a href=''>here</a> to download the files in the <br/>
      developing environment.
      </div>
    </div>
  )
}

export default Title
