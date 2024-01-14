import React from 'react'
import './index.scss'

const ContentArea = ({ whichOne }) => {
  const content = [
    {
      title: 'My study history for Front End.',
      lis: [
        `In this page, I would show you what I've learnt in Front End field.
        I followed system courses on the Internet, coming with both lectures and practices for all key points.
        And here I show you my hand write notes and the key points I've leant.`,
        'I can\'t remember all I learnt actually, but remember what I learnt and is able to look it up if could not remember the detail and achieve the function.'
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
      title: 'Besides the courses and 43 pages notes, I also spent time finished JavaScript Algorithms and Data Structures in \'FreeCodeCamp\'',
      lis: [
        'It\'s kind hard to list the key points here.',
        'As too many things are covered.',
        'Allow me to sneak in a little moment of laziness, if you may  :p'
      ],
      background: require('../../../assets/notes/JS.png')
    },
    {
      title: 'What really saved me during build this web',
      lis: [
        'Basic use of git'
      ],
      background: require('../../../assets/notes/Git.png')
    },
    {
      title: 'I would say this part is more learning axios than basic AJAX',
      lis: [
        'Firstly learnt basic XMLhttpRequest',
        'Then soon forgot it and get boiled by axios XD',
        'basic use of axios, Interceptor, Promise to prevent call back hell ...'
      ],
      background: require('../../../assets/notes/Ajax.png')
    },
    {
      title: 'Starting using NodeJs give me an illution of I am already a front end engineer',
      lis: [
        'basic using of NodeJs for Front End development',
        'Recognizing the environment files',
        'learnt Webpack and one way to apply CDN'
      ],
      background: require('../../../assets/notes/NodeJs.png')
    },
    {
      title: 'Vue2 is the first structure I learnt, for the possible maintainess for old projects',
      lis: [
        'Unique attributes in Vue2: v-model,v-if,v-html ...',
        'data, methods, computed, watch in Vue2',
        'Life cycle',
        'component',
        'router',
        'basic data communication (props, event bus...) then Vuex'
      ],
      background: require('../../../assets/notes/Vue2.png')
    },
    {
      title: 'An improvement on Vue2, I feel it\'s easier to use',
      lis: [
        'from options API in Vue2 to composition API in vue3',
        'Besides data communication larnt in Vue2, Provide and Inject new added',
        'Pinia for data management'
      ],
      background: require('../../../assets/notes/Vue3.png')
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
