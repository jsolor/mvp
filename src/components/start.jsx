import React, { useState, useEffect } from 'react';

const openChev = (
  <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z" />
);
const closedChev = (
  <path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z" />
);

function Start() {
  const [helloList, setList] = useState(['world', 'fellow humans', 'your name here', 'maybe']);

  // useEffect(() => {
  //     const randomN = Math.floor(Math.random() * (helloList.length  + 1));
  // }, [helloList]);

  return (
    <div className="section" id="start">
      <div style={{marginTop:'15%'}}>
        <a>hello,</a>
        <div className="content">
          <div className="content__container">
            <ul className="content__container__list">
              {helloList.map((entry) => <li className="content__container__list__item">{entry} !</li>)}
            </ul>
          </div>
        </div>
        <header>
          <h1>
            <p style={{ fontWeight: '300', marginBottom: '0' }}><small>i'm, </small></p>
            jesus solorzano
          </h1>
          <h4><small>a software engineer</small></h4>
        </header>
      </div>
    </div>
  );
}

export default Start;
