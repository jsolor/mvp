import React from 'react';

function Nav() {
  function onClick(clicked) {
    const section = document.getElementById(clicked);
    section.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div className="nav">
        <div className="nav-itm" type="button" onClick={() => onClick('about')}>about</div>
        <div className="nav-itm" type="button" onClick={() => onClick('projects')}>projects</div>
        <div className="nav-itm" type="button" onClick={() => onClick('education')}>education</div>
        <div className="nav-itm" type="button" onClick={() => onClick('experience')}>experience</div>
        <div className="nav-itm" type="button" onClick={() => onClick('comments')}>comments</div>
      </div>
      <svg className="top-btn" type="button" onClick={() => onClick('start')} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M6 17.59L7.41 19L12 14.42L16.59 19L18 17.59l-6-6z"></path>
        <path fill="currentColor" d="m6 11l1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"></path>
      </svg>
    </div>
  )
}

export default Nav;
