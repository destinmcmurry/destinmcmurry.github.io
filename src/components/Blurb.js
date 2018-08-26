import React from 'react';

const imageStyle = {
  borderRadius: '50%',
  height: '100px',
  width: '100px',
  padding: '3px',
  boxShadow: '-1px 1px 0px 0px #515151'
}

const headerStyle = {
  fontFamily: 'Montserrat, sans-serif', 
  fontSize: '16px',
  margin: '5px auto 0 auto',
  paddingBottom: '5px',
  width: '150px',
  borderBottom: '1px dotted #3d3d3d'
}

const valuesStyle = {
  marginTop: '10px'
}

const Blurb = props => {
  return (
    <div className='Blurb'>
      <img style={imageStyle} src='https://avatars3.githubusercontent.com/u/29695784?s=460&v=4' alt='headshot'/>
      <h4 style={headerStyle}>Myself</h4>
      <p>Before coding, I spent most of my time in art and architecture studios, where I first began thinking about flow and function, realized I would need to teach myself the tools and technologies I needed to succeed and stand out, and learned to see the big picture and at the same time know that the devil is in the details. As an engineer, I bring these lessons with me as well as something that most creatives share: the burning desire to be proud of what I make.</p>
      <h4 style={headerStyle}>My Goals</h4>
      <p>I'm looking to be part of a collaborative environment where I have the opportunity to tackle challenges, contribute ideas, and learn from others on a daily basis.</p>
      <h4 style={headerStyle}>My Values</h4>
      <div style={valuesStyle}>
        <span>open communication</span>
        <span> | </span>
        <span>sharing</span>
        <span> | </span>
        <span>organization and best practices</span>
        <span> | </span>
        <span>celebrating wins</span>
        <span> | </span>
        <span>a constructive mindset</span>
        <span> | </span>
        <span>a general sense of awareness and consideration</span>
        <span> | </span>
        <span>efficiency</span>
        <span> | </span>
        <span>not taking yourself too seriously</span>
        <span> | </span>
        <span>thoughtful feedback</span>
        <span> | </span>
        <span>staying iterative</span>
        <span> | </span>
        <span>positivity</span>
        <span> | </span>
        <span>the little things</span>
      </div>
      <br />
      <small>*list subject to grow</small>
    </div>
  );
}

export default Blurb;