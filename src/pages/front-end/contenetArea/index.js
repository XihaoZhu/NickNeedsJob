import React from 'react'
import './index.scss'

const ContentArea = ({ whichOne }) => {
  const content = [
    {
      title: 'My study history for Front End.',
      lis: [
        `In this page, I would show you what I've learnt in Front End field.
        Making notes during study is always my learning habbit.
        Not to write everything down but to stimulate my memory.
        It's rare for me to totally forget what i have learnt,
        so when i can't remember any detials, I can also look back to my notes`
      ],
      background: ''
    },
    {
      title: 'The begining of my front end study.',
      lis: [
        'Basic Semantic and Usage of Tags',
        'Entity Characters',
        'Basic rules in HTML'
      ],
      background: require('../../../assets/notes/HTML.png')
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      title: 'aba',
      lis: [

      ],
      background: 'aba'
    }
  ]

  return (
    <div className='contentArea' style={{ backgroundImage: `url(${content[whichOne].background})` }}>
      <span className='comment'>
        {content[whichOne].title}
      </span>
      <ul className='list'>
        {content[whichOne].lis.map((item, index) =>
          <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default ContentArea
