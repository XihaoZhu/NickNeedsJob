import './index.scss'
import React from 'react'

const PageFoot = () => {
  return (
    <div className='mostOut'>
      <div className='logo'></div>
      <div className='decoration'></div>
      <div className='contact'>
        <h3>Contact Me</h3>
        <span>TEL : 07536245732</span><br/>
        <span>Email : xihao.zhu@outlook.com</span><br/>
        <span>Address : M7 1NQ, flat 2</span>
      </div>
      <div className='decoration'></div>
      <div className='copyright'>
        <h3>Copyright</h3>
        <span>All elements invovled in this page are either from <br/> Nick&apos;s personal work or open source resources on Internet</span><br/>
        <span>And this is not a commercial project.</span>
      </div>
    </div>
  )
}

export default PageFoot
