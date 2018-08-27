import React from 'react';

const footerStyle = {
  margin: '35px 0',
  bottom: '0',
  left: '0',
  right: '0',
  height: '30px',
  paddingTop: '25px',
  borderTop: '1px dotted #3d3d3d',
  padding: '5px 0 10px 0'
}

const logoStyle = {
  height: '15px',
  width: '15px',
  padding: '0 5px'
}

const emailStyle = {
  display:'block', 
  margin:'7px', 
  fontSize:'11px'
}

const Footer = props => {
  return (
    <div style={footerStyle}>
      <p style={emailStyle}>destinmcmurry@gmail.com</p>
      <a href='https://codepen.io/destinmcmurry/' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/51/51767.svg'/></a>
      <a href='https://www.linkedin.com/in/destin-mcmurry/' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/145/145807.svg'/></a>
      <a href='https://github.com/destinmcmurry' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/25/25231.svg'/></a>
      <a href='https://www.instagram.com/destinisabeach/' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/174/174855.svg'/></a>
      <a href='https://medium.com/@destinmcmurry' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/81/81661.svg'/></a>
    </div>
  );
}

export default Footer;
