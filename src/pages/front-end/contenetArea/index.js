import React from 'react'
import './index.scss'

const ContentArea = ({ whichOne }) => {
  const content = [
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
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
      lis: [

      ],
      background: 'aba'
    },
    {
      titles: 'aba',
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
