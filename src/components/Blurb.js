import React from 'react';

const imageStyle = {
  height: '150px',
  width: '150px',
  padding: '3px',
  border: 'dotted 1px',
  marginBottom: '10px'
}

const headerStyle = {
  fontFamily: 'Montserrat, sans-serif', 
  fontSize: '13px',
  margin: '5px auto 0 auto',
  minWidth: '150px'
}

const lineStyle = {
  margin: '5px',
  verticalAlign: 'middle'
}

const Blurb = props => {
  return (
    <div className='Blurb'>
      <img style={imageStyle} src='https://avatars3.githubusercontent.com/u/29695784?s=460&v=4' alt='headshot'/>
      <h4 style={headerStyle}>Before coding</h4>
      <p>I spent most of my time in art and architecture studios, where I first began thinking about flow and function, realized I would need to teach myself the tools and technologies I needed to stand out, and learned to see the big picture while also knowing that the devil is in the details.</p>
      <h4 style={headerStyle}>As a developer</h4>
      <p>I bring these lessons with me as well as something that most creatives share: the burning desire to be proud of everything I make.</p>
      <h4 style={headerStyle}>I'm looking to</h4>
      <p>be part of a collaborative environment where I have the opportunity to tackle challenges, contribute ideas, and learn from others on a daily basis.</p>
      <h4 style={headerStyle}>Some things I value:</h4>
      <div style={{marginTop: '10px'}}>
        <span>open communication</span>
        <span style={lineStyle}> | </span>
        <span>sharing</span>
         <span style={lineStyle}> | </span>
        <span>organization and best practices</span>
         <span style={lineStyle}> | </span>
        <span>celebrating wins</span>
         <span style={lineStyle}> | </span>
        <span>a constructive mindset</span>
         <span style={lineStyle}> | </span>
        <span>a general sense of awareness and consideration</span>
         <span style={lineStyle}> | </span>
        <span>efficiency</span>
         <span style={lineStyle}> | </span>
        <span>not taking yourself too seriously</span>
         <span style={lineStyle}> | </span>
        <span>thoughtful feedback</span>
         <span style={lineStyle}> | </span>
        <span>staying iterative</span>
         <span style={lineStyle}> | </span>
        <span>positivity</span>
         <span style={lineStyle}> | </span>
        <span>the little things</span>
      </div>
    </div>
  );
}

export default Blurb;