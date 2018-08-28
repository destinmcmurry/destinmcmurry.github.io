import React from 'react';

const imageStyle = {
  width: '80%',
  maxWidth: '300px',
  padding: '5px',
  backgroundColor: 'white',
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

const linkStyle = {
  display: 'block',
  margin: '8px',
  fontSize: '10px',
  fontWeight: 'bold'
}


const Blurb = props => {
  return (
    <div className='Blurb'>

      <img style={imageStyle} src='https://github.com/destinmcmurry/personal-website/blob/master/public/images/me.jpg?raw=true' alt='headshot'/>
      <br />

      <h4 style={headerStyle}>Before coding</h4>

      <p>I spent most of my time in art and architecture studios, where I first began thinking about flow and function, realized I would need to teach myself the tools and technologies I needed to stand out, and learned to see the big picture while also knowing that the devil is in the details.</p>

      <h4 style={headerStyle}>As a developer</h4>

      <p>I bring these lessons with me as well as something that most creatives share: the relentless need to be proud of everything I make.</p>

      <h4 style={headerStyle}>Values</h4>

      <div style={{margin: '15px 0'}}>
        <span style={valuesStyle}>open communication</span>
        <span style={valuesStyle}>sharing</span>
        <span style={valuesStyle}>organization and best practices</span>
        <span style={valuesStyle}>celebrating wins</span>
        <span style={valuesStyle}>having a constructive mindset</span>
        <span style={valuesStyle}>awareness and consideration of others</span>
        <span style={valuesStyle}>efficiency</span>
        <span style={valuesStyle}>thoughtful feedback</span>
        <span style={valuesStyle}>staying iterative</span>
        <span style={valuesStyle}>not taking yourself too seriously</span>
        <span style={valuesStyle}>positivity</span>
        <span style={valuesStyle}>the little things</span>
      </div>

      <h4 style={headerStyle}>Media</h4>

      <a style={linkStyle} href='https://medium.com/@destinmcmurry/how-to-optimize-your-time-at-coding-bootcamp-tackling-the-drinking-from-a-firehose-problem-in-o-n-a74d4bc5ce6' target='blank'>"How to Optimize Your Time at Coding Bootcamp"</a>

      <a style={linkStyle} href='http://ford.vassar.edu/projects/2014/tallon.html' target='blank'>"Transcribing the Gothic Cathedral"</a>
      
      <a style={linkStyle} href='https://www.youtube.com/watch?v=ryAuEQ3MwcQ&t=1s' target='blank'>"My Basic 3 Settlers of Catan Strategies"</a>

    </div>
  );
}

export default Blurb;