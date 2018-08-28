import React from 'react';

const outerDivStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  flexFlow: 'row wrap'
}

const innerDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '150px',
  margin: '0 7px'
}

const logoStyle = {
  height: '35px',
  width: '35px',
  margin: ' 25px 20px 5px 20px',
  padding: '15px',
  border: 'dotted 1px',
  borderRadius: '3px'
}

const Misc = props => {
  return (
    <div>
      <div style={outerDivStyle}>
        <div style={innerDivStyle}>
          <a href='https://drive.google.com/open?id=1gCwZffM66EE0M_Qjt9Rrx2-6rErxyAZc' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/179/179324.svg' alt='google drive'/></a>
          <small>view or download my resume</small>
        </div>
        <div style={innerDivStyle}>
          <a href='https://medium.com/@destinmcmurry/how-to-optimize-your-time-at-coding-bootcamp-tackling-the-drinking-from-a-firehose-problem-in-o-n-a74d4bc5ce6' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/81/81661.svg' alt='medium article'/></a>
          <small>read about my journey to and time at coding bootcamp</small>
        </div>
        <div style={innerDivStyle}>
          <a href='http://ford.vassar.edu/projects/2014/tallon.html' target='blank'><img style={logoStyle} src='https://media.licdn.com/dms/image/C560BAQGDVglVeSY39Q/company-logo_400_400/0?e=1543449600&v=beta&t=iDOv-V8I9HEgRWdAaq5aWO_9cdQXGbehYOffkSSxiWQ'/></a>
          <small>check out my Vassar Ford Scholar project</small>
        </div>
        <div style={innerDivStyle}>
          <a href='https://www.youtube.com/watch?v=ryAuEQ3MwcQ&t=1s' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/174/174883.svg' alt='youtube video'/></a>
          <small>watch me explain Settlers of Catan strategies</small>
        </div>
      </div>
    </div>
  );
}

export default Misc;