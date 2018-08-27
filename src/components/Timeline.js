import React from 'react';

const segmentStyle = {
  display: 'block',
  margin: '5px',
  fontSize: '11px'
}

const yearStyle = {
  display: 'inline-block',
  fontFamily: 'Homemade Apple, cursive',
  fontSize: '16px',
  height: '24px',
  borderBottom: 'dotted 1px',
  marginBottom: '5px'
}

const Timeline = props => {
  return (
    <div className='Timeline'>
      <span style={yearStyle}>2010</span>
      <span style={segmentStyle}>accepted to the Mississippi School for Math and Science</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2011</span>
      <span style={segmentStyle}>first robotics class</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2012</span>
      <span style={segmentStyle}>first exploration of architecture with an internship at Mississippi State University</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>accepted to Vassar College on a Questbridge Scholarship</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>graduated from MSMS</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>full liberal arts immersion, exploring all departments</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2013</span>
      <span style={segmentStyle}>began working as an Art Lab Assistant for Vassar's Professor of Gothic Architecture</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>first architectural design studio</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2014</span>
      <span style={segmentStyle}>chosen as a Vassar Ford Scholar for the project "Transcribing the Gothic Cathedral"</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>enrolled in the Foundations Architecture program at the Danish Institute for Study Abroad in Copenhagen</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2015</span>
      <span style={segmentStyle}>interned at a community development organization in Jackson, MS</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>welded a 12'x9'x6' sculpture</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2016</span>
      <span style={segmentStyle}>completed 50-page senior thesis and field work with a low-income housing organization in Poughkeepsie, NY</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>graduated from Vassar with a degree in Urban Studies with a concentration in architectural design</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>moved to Seoul, SK to begin teaching English at an adult language academy</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2017</span>
      <span style={segmentStyle}>first line of JavaScript</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>accepted to the Grace Hopper Program at Fullstack Academy</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2018</span>
      <span style={segmentStyle}>graduated as a Full-Stack JavaScript Developer</span>
    </div>
  );
}

export default Timeline;