import React, { useState, useEffect } from 'react';

function SideArrow({ setVisible }) {
  const base = (
    <svg type="button" className="chev" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z" />
    </svg>
  );

  const [opened, setOpening] = useState(true);
  const [chev, setChevRotation] = useState(base);
  function onToggle() {
    if (opened) {
      setOpening(false);
      setChevRotation(
        <svg type="button" className="chev chev-closing" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z" />
        </svg>
      );
      setTimeout(() => setVisible(false), 200);
    } else {
      setOpening(true);
      setChevRotation(
        <svg type="button" className="chev chev-opening" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z" />
        </svg>
      );
      setTimeout(() => setVisible(true), 200);
    }
  }

  return (
    <div onClick={onToggle}>
      {chev}
    </div>
  )
}

export default SideArrow;
