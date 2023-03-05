import React from 'react';

function LogEntry({ name, date, message }) {
  return (
    <div className="log-entry" >
      <h6 style={{ fontStyle: 'italic' }}>{name}</h6>
      <p style={{ fontSize: 'xx-small' }}>{date}</p>
      <p>{message}</p>
    </div>
  )
}

export default LogEntry;
