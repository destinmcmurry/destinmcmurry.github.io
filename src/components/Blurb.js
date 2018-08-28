import React from 'react';

// const bannerStyle = {
//   position: 'absolute',
//   top: '0',
//   left: '0',
//   right: '0',
//   height: '120px',
//   zIndex: '-1',
//   opacity: '.9'
// }

const imageStyle = {
  height: '250px',
  width: '250px',
  padding: '10px',
  border: 'dotted 1px',
  margin: '25px auto 10px auto'
}

const headerStyle = {
  display: 'inline-block',
  fontFamily: 'Homemade Apple, cursive',
  fontSize: '13px',
  margin: '5px auto 0 auto',
  borderBottom: 'dotted 1px'
}

const valuesStyle = {
  display: 'block',
  margin: '2px'
}

const Blurb = props => {
  return (
    <div className='Blurb'>
      {/*<img style={bannerStyle} src='/images/bridgeBanner.jpg' alt='bridge'/>*/}
      <img style={imageStyle} src='https://avatars3.githubusercontent.com/u/29695784?s=460&v=4' alt='headshot'/>
      <br />
      <h4 style={headerStyle}>Before coding</h4>
      <p>I spent most of my time in art and architecture studios, where I first began thinking about flow and function, realized I would need to teach myself the tools and technologies I needed to stand out, and learned to see the big picture while also knowing that the devil is in the details.</p>
      <h4 style={headerStyle}>As a developer</h4>
      <p>I bring these lessons with me as well as something that most creatives share: the relentless need to be proud of everything I make.</p>
      <h4 style={headerStyle}>My goal is to</h4>
      <p>become part of a collaborative environment where I have the opportunity to tackle challenges, contribute ideas, and learn from others on a daily basis.</p>
      <h4 style={headerStyle}>I'm passionate about</h4>
      <div style={{marginTop: '10px'}}>
        <span style={valuesStyle}>open communication,</span>
        <span style={valuesStyle}>sharing,</span>
        <span style={valuesStyle}>organization and best practices,</span>
        <span style={valuesStyle}>celebrating wins,</span>
        <span style={valuesStyle}>having a constructive mindset,</span>
        <span style={valuesStyle}>awareness and consideration of others,</span>
        <span style={valuesStyle}>efficiency,</span>
        <span style={valuesStyle}>thoughtful feedback,</span>
        <span style={valuesStyle}>staying iterative,</span>
        <span style={valuesStyle}>positivity,</span>
        <span style={valuesStyle}>and the little things.</span>
      </div>
    </div>
  );
}

export default Blurb;