import React from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import PageFoot from '@/components/PageFoot'

const PhotoShop = () => {
  const whichPage = 'PhotoShop'
  const HeadColor = '#5F979E'
  return (
    <>
    <CoreSkillHead whichPage={whichPage} HeadColor={HeadColor}></CoreSkillHead>
    <div className='PhotoShop'>
      <div className='content'>
        Firstly I have to make it clear that I&apos;m totally not an expert in PhotoShop.<br/>
        At the begining I did follow some systematic courses which I still benifit from, while it was alreay years ago and wasn&apos;t advancing knowledge but basic ones.<br/>
        It&apos;s kind of brave for me creating a separate page for Ps in my project, as I still think I have some knoledge about it.<br/>
        What I can do with Ps :<br/>
        1. Drawing simple things. All image elements you see here in my website were produced by me in Ps. <br/>
        2. Editings I&apos;ve done before, mostly were for views and profiles. <br/>
        3. Know what can Ps do and easily find guidance on Internet for effect I want. <br/>
      </div>
      <div className='PicCountainer'>
        <div style={{ backgroundImage: `url(${require('../../assets/images/bulbOff.png')})` }}></div>
        <div style={{ backgroundImage: `url(${require('../../assets/BlenderPage/film.png')})` }}></div>
        <div>
          <div style={{ backgroundImage: `url(${require('../../assets/images/originTree.jpg')})`, height: '50%', width: '100%' }}></div>
          <div style={{ backgroundImage: `url(${require('../../assets/images/EdittedTree.jpg')})`, height: '50%', width: '100%' }}></div>
        </div>
        <div style={{ backgroundImage: `url(${require('../../assets/images/NNJ_logo.png')})` }}></div>
      </div>
    </div>
    <PageFoot HeadColor={HeadColor}></PageFoot>
    </>
  )
}

export default PhotoShop
