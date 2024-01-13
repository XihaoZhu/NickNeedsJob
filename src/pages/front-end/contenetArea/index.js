import React from 'react'
import './index.scss'

const ContentArea = ({ whichOne }) => {
  const content = [
    {
      title: 'My study history for Front End.',
      lis: [
        `In this page, I would show you what I've learnt in Front End field.
        I followed system courses on the Internet, coming with both lectures and practice.
        And here I show you my hand write notes and the key points I've leant.`
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
      title: 'I kind like these little things, make web more colorful',
      lis: [
        'Syntax for Embedded, External and Inline CSS',
        'Selector',
        'Properties and corresponding Values and performances',
        'Features: Inheritance, Specificity, Priority...',
        'Pseudo Elements',
        'Float, Position',
        'Some common sense in CSS'
      ],
      background: require('../../../assets/notes/CSS.png')
    },
    {
      title: 'More CSS knowledge and mobile responsing',
      lis: [
        'transform',
        'animation',
        'two strategies for mobile responsing: rem and vw/vh',
        'Flex Layout',
        'Responsing Layout (using @media)',
        'key advantages and basic use of Less'
      ],
      background: require('../../../assets/notes/Mobile.png')
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
