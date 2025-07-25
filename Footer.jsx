import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://twitter.com/iambisenvansh" target="_blank" className="icon" id="icon1">
          <img src="/res/x.jpg" alt="Icon 1" />
        </a>
        <a href="https://github.com/iambisenvansh" target="_blank" className="icon" id="icon2">
          <img src="/res/git.jpg" alt="Icon 2" />
        </a>
        <a href="https://www.linkedin.com/in/vansh-bisen-80914b287" target="_blank" className="icon" id="icon3">
          <img src="/res/in.jpg" alt="Icon 3" />
        </a>
        <a href="https://www.instagram.com/iambisenvansh" target="_blank" class="icon" id="icon4">
        <img src="res/insta1.jpg" alt="Icon 4"/>
        </a>

      </div>
      <p>FOF_iambisenvansh@2025</p>
    </div>
  );
};

export default Footer;