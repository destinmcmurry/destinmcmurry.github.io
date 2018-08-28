import React from 'react';

const headerStyle = {
  display: 'inline-block',
  fontFamily: 'Homemade Apple, cursive',
  fontSize: '13px',
  margin: '25px 0 0 0'
}

const screenshotStyle = {
  display: 'block',
  margin: 'auto',
  width: '70%',
  maxWidth: '600px',
  padding: '10px',
  border: '1px dotted'
}

const logoStyle = {
  height: '15px',
  width: '15px',
  padding: '0 5px',
  verticalAlign: 'text-top'
}

const linkStyle = {
  fontSize: '10px',
  fontWeight: 'bold'
}

const Projects = props => {
  return (
    <div className='Projects'>

      <a href='https://github.com/acdc-1802/pintrips' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github'/></a>
      <h4 style={headerStyle}>Pintrips</h4>
      <a href='https://mypintrips.com/' target='blank'><img style={screenshotStyle}  src='images/pintrips-screenshot.png' alt='pintrips'/></a>
      <h4>a progressive web application for collaboratively planning and journaling trips</h4>
      <small>Pintrips allows users to plan for and journal trips by dropping custom pins to mark places they would like to go and places that they've been on individual 'place boards'. These boards, rendered with a React binding of Mapbox GL JS, are shareable and can have multiple collaborators and styles. The real-time collaboration is possible because of the use of Google's Cloud Firestore, which allows board components to listen for any changes and automatically update when they happen. At any point in the trip, users can send their pinned and styled boards as an online postcard that uses app geolocation and GreenSock animation to stamp and send to family and friends.</small>
      <p>stack: JavaScript, HTML, CSS, Node.js, React.js, React Mapbox GL JS, React Semantic UI, Cloud Firestore, GreenSock, EmailJS</p>
      <a style={linkStyle} href='https://bit.ly/2OwTqzl' target='blank'>watch the facebook live presentation</a>

      <br/>

      <a href='https://github.com/deb-gh-1802/grace-shopper' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github'/></a>
      <h4 style={headerStyle}>Build - A - Self</h4>
      <a href='https://rocky-eyrie-74701.herokuapp.com/' target='blank'><img style={screenshotStyle}  src='images/buildaself-screenshot.png' alt='build-a-self'/></a>
      <h3>an e-commerce website that sells desirable qualities</h3>
      <small>Build-A-Self is an e-commerce site that sells confidence, ambition, and other positive qualities. The functionality includes creating an account with an email or Google OAuth, adding items to your cart, purchasing an order (well, sort of), and viewing your past order history. For administrators, there is also a content management system for adding and updating items, altering admin statuses, and viewing all users' order histories.</small>
      <p>stack: JavaScript, HTML, CSS, Node.js, Express, PostgreSQL, Sequelize, React.js, Redux, React-Redux, Passport, Google OAuth</p>
      


      <a href='https://github.com/destinmcmurry/happy-router-web' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github'/></a>
      <h4 style={headerStyle}>Happy Router</h4>
      <img style={screenshotStyle}  src='images/happyrouter-screenshot.png' alt='happyrouter'/>
      <h4>a mobile responsive web app that generates optimal routes of nearby happy hours</h4>
      <small>HappyRouter generates a randomized route of restaurant and bar specials based on a user's input. It does all of the research and planning for you by searching for active happy hours that are nearby and fall within your window, and ordering the route with a maximum of 3 places by the soonest ending happy hour.</small>
      <p>stack: JavaScript, HTML, CSS, Node.js, React.js, Redux, React-Redux, Mapbox GL JS</p>
      <a style={linkStyle} href='https://www.youtube.com/watch?v=ZOA7SsDDzk4' target='blank'>watch the presentation on youtube</a>

      <br/>

      <a href='https://github.com/destinmcmurry/wagstaff/' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github'/></a>
      <h4 style={headerStyle}>Wagstaff</h4>
      <img style={screenshotStyle}  src='images/wagstaff-screenshot.png' alt='happyrouter'/>
      <h4>a single page application for managing a database of students and homerooms</h4>
      <small>The Wagstaff Elementary School Management site organizes students into their corresponding homerooms and allows the user to add new homerooms and students easily by filling out a quick form and to delete homerooms and students with the click of a button. If a teacher's homeroom is deleted, all students previously assigned will be updated to display "no homeroom."</small>
      <p>stack: JavaScript, HTML, CSS, Node.js, Express, React.js, Redux, React-Redux, PostgreSQL, Sequelize</p>
    </div>
  );
}

export default Projects;
