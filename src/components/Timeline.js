import React from 'react';

const tlStyle = {
  marginTop: '35px'
}

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

const bannerStyle = {
  display: 'block',
  margin: 'auto',
  width: '100%',
  maxWidth: '500px',
  padding: '3px',
  backgroundColor: '#fff'
}

const lighterBannerStyle = {
  display: 'block',
  margin: 'auto',
  width: '100%',
  maxWidth: '500px',
  opacity: '.85',
  padding: '5px',
  backgroundColor: '#fff'
}

const Timeline = props => {
  return (
    <div style={tlStyle}>
    <span style={yearStyle}>2010</span>
    <img style={lighterBannerStyle} src='https://github.com/destinmcmurry/personal-website/blob/master/public/images/msBanner.jpg?raw=true' alt='rural ms'/>
      <span style={segmentStyle}>accepted to the Mississippi School for Math and Science in Columbus, MS</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2011</span>
      <span style={segmentStyle}>first robotics class where I wrote basic programs, competed in the robot olympics, and learned the joys of writing logic</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2012</span>
      <span style={segmentStyle}>first exploration of architecture with an internship at Mississippi State University where I first tried my hand at PhotoShop and gathered research for a rural downtown development thesis</span>
      <span style={segmentStyle}>:</span>
      <img style={bannerStyle} src='https://github.com/destinmcmurry/personal-website/blob/master/public/images/msmsBanner.jpg?raw=true' alt='senior year'/>
      <span style={segmentStyle}>graduated from MSMS and started a countdown to my first ever flight</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>began freshman year at Vassar College as a National Questbridge Scholar</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>got the most out of my liberal arts experience by exploring nearly every department and becoming increasingly unsure of my future</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2013</span>
      <img style={lighterBannerStyle} src='https://github.com/destinmcmurry/personal-website/blob/master/public/images/vcBanner.jpg?raw=true' alt='vassar library'/>
      <span style={segmentStyle}>began working as an Art Lab Assistant for Vassar's Professor of Gothic Architecture and practicing my color correcting and 360º panorama stitching</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>first architectural design studio and introduction to tools like AutoCAD, Illustrator, and SketchUp</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2014</span>
      <span style={segmentStyle}>chosen as a Vassar Ford Scholar for the project "Transcribing the Gothic Cathedral" where I worked with laser data and really honed my AutoCAD skills</span>
      <span style={segmentStyle}>:</span>
      <img style={lighterBannerStyle} src='https://github.com/destinmcmurry/personal-website/blob/master/public/images/denmarkBanner.jpg?raw=true' alt='denmark'/>
      <span style={segmentStyle}>enrolled in the Foundations Architecture program at the Danish Institute for Study Abroad in Copenhagen, Denmark where I regularly traveled for site studies, took a watercolor class, and completed my favorite architectural design project "Planting a Community Food Hub"</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2015</span>
      <span style={segmentStyle}>interned at a community development organization in Jackson, MS where I did some 3D printing, made a 3D rendering from an aerial site plan that was used for a park proposal, and coordinated volunteers for a mural painting</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>designed and built a 15'x9'x6' sculpture entirely of metal rods that challenged me come up with an assembly plan that would have the least amount of welds, material, and time possible</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2016</span>
      <img style={lighterBannerStyle} src='https://github.com/destinmcmurry/personal-website/blob/master/public/images/libraryBanner.jpg?raw=true' alt='vassar library'/>
      <span style={segmentStyle}>completed 50-page senior thesis on creative placemaking in the local community and field work with a low-income housing organization in Poughkeepsie, NY</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>graduated from Vassar with a degree in Urban Studies with a concentration in Architectural Design</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>decided to move to Seoul, SK to begin teaching English at an adult language academy and avoid making the grad school decision</span>
      <span style={segmentStyle}>:</span>
      <img style={lighterBannerStyle} src='https://github.com/destinmcmurry/personal-website/blob/master/public/images/koreaBanner.jpg?raw=true' alt='seoul, sk'/>
      <span style={yearStyle}>2017</span>
      <span style={segmentStyle}>began teaching myself HTML, CSS, and JavaScript because I thought they might be cool skills to have</span>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>became completely addicted to writing code, started annoying all of my friends by showing them what you could do with JavaScript, and ultimately accepted to the Grace Hopper Program at Fullstack Academy</span>
      <span style={segmentStyle}>:</span>
      <span style={yearStyle}>2018</span>
      <span style={segmentStyle}>moved to Brooklyn, NY to begin my full-stack developer training</span>
      <img style={bannerStyle} src='https://github.com/destinmcmurry/personal-website/blob/master/public/images/bridgeBanner.jpg?raw=true' alt='brooklyn bridge'/>
      <span style={segmentStyle}>:</span>
      <span style={segmentStyle}>presented my final project on Facebook Live without passing out and graduated from Grace Hopper eager to find my next role as a front-end or full-stack software developer!</span>
    </div>
  );
}

export default Timeline;