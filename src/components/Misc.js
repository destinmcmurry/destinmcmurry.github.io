import React from 'react';

const headerStyle = {
  fontFamily: 'Montserrat, sans-serif', 
  fontSize: '16px',
  margin: '5px auto 0 auto',
  paddingBottom: '5px',
  width: '30%',
  minWidth: '150px',
  borderBottom: '1px dotted #3d3d3d'
}

const thumbnailStyle = {
  display: 'inline-block',
  height: '35%',
  width: '35%',
  border: 'dotted 1px',
  padding: '3px'
}

const Misc = props => {
  return (
    <div>
        <a href='https://medium.com/@destinmcmurry/how-to-optimize-your-time-at-coding-bootcamp-tackling-the-drinking-from-a-firehose-problem-in-o-n-a74d4bc5ce6' target='blank'>
        <div>
          <img style={thumbnailStyle} src='  https://cdn-images-1.medium.com/max/1600/1*J42kucgyFDqRzifUE82cOw.jpeg'/>
          <p>article on my road to and time at coding bootcamp</p>
        </div>
        </a>
        <br/>
        <a href='http://ford.vassar.edu/projects/2014/tallon.html' target='blank'>
          <img style={thumbnailStyle} src='http://ford.vassar.edu/docs/2014/gothic-cathedral.jpg'/>
          <p>blog post on working with laser data as a Vassar Ford Scholar</p>
        </a>
        <br/>
        <a href='https://www.youtube.com/watch?v=ryAuEQ3MwcQ&t=1s' target='blank'>
          <img style={thumbnailStyle} src='https://i.ytimg.com/vi/ryAuEQ3MwcQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB4lqWP9lcbS8vIbSKuBpsGNLu_SQ'/>
          <p>settlers of catan strategy video for a scholarship submission</p>
        </a>
    </div>
  );
}

export default Misc;

// youtube stackathon
// https://www.youtube.com/watch?v=ZOA7SsDDzk4
// youtube pintrips
//<a href='https://www.youtube.com/watch?v=sLBZP65FHTQ'/>