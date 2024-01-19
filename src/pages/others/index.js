import React from 'react'
import './index.scss'
import CoreSkillHead from '@/components/CoreSkillHead'
import PageFoot from '@/components/PageFoot'

const Others = () => {
  const HeadColor = 'rgb(221,208,192)'
  const content = [
    {
      background: require('../../assets/OthersPic/modeling.png'),
      words: 'This is one of 3D printing work for the feet I built during the internship. In undergranduate, I had a course of 3D modeling software 3Dexperience, I also self-trained the basic using of Solidworks. Blender, which was seperately showed before, is also a modeling software, while it more used for visual things not industry.',
      title: 'Modeling'
    },
    {
      background: require('../../assets/OthersPic/snowTree.gif'),
      words: 'Matlab is one of the courses I experienced both in underguanduate and master. Here is a tree in snow I bult in matlab, it\' not the most difficult work I\'ve done in matlab, but it\'s one of the most interesting ones. Mostly matlab was used for analyze data. I was also taught the basic use of simulink in MATLAB (for a course called Control of Aerospace system)',
      title: 'Matlab'
    },
    {
      background: require('../../assets/OthersPic/Ansys.png'),
      words: 'A course in both undergruaduate and master too, focused on the 2D and 3D simulation about aero dynamics. And my graduation essay for undergruaduate was based on simulations in this software. Here shows you something appeared in that essay.',
      title: 'Ansys Workbench'
    },
    {
      background: require('../../assets/OthersPic/casetrue.png'),
      words: 'This is something new I learnt in master. I built the code in Labview to be run in a FPGA for a coursework. The experiment was about using hotwire to measure the wind in a wind tube. And the function was to collect and convert the electric signals in a very high frequence. This picture is a case for what I worte there',
      title: 'Labview'
    }
  ]
  return (
    <>
    <CoreSkillHead HeadColor={HeadColor}></CoreSkillHead>
    <div className='Others'>
      {content.map((item, index) => (
        <div className='item' key={index}>
        <div className='background' style={{ backgroundImage: `url(${item.background})` }}></div>
        <h3>{item.title}</h3>
        <div className='words'>{item.words}</div>
        </div>
      ))}
    </div>
    <PageFoot HeadColor={HeadColor}></PageFoot>
    </>
  )
}

export default Others
