import React, { useState } from 'react';
import SideArrow from './sideArrow.jsx';

function Education() {
  const [isHRVis, setHRVis] = useState(true);
  const [isUICVis, setUICVis] = useState(true);

  return (
    <div className="section" id="education">
      <h2>/* education */</h2>
      <br/>
      <div className="inner">
        <SideArrow setVisible={setHRVis} />
        <div className="project" style={{ minWidth: '100%'}}>
          <div className="proj-title">
            <h3>Hack Reactor</h3>
            <p style={{ fontStyle: 'italic' }}>2023</p>
          </div>
          {isHRVis && (
            <p><small>Software Engineering Immersive</small></p>
          )}
          <br/>
          <br/>
        </div>
      </div>
      <div className="inner">
        <SideArrow setVisible={setUICVis} />
        <div className="project" style={{ minWidth: '100%'}}>
          <div className="proj-title">
            <h3>University of Illinois at Chicago</h3>
            <p style={{ fontStyle: 'italic' }}>--</p>
          </div>
          {isUICVis && (
            <div>
              <p><small>Computer Science</small></p>
              <p>Program Design I & II, Foundations of Computing, Programming Practicum, Data Structures, Machine Organization, Languages and Automata, Programming Language Concepts, Software Design, Computer Systems, Software Engineering I, Compiler Design, Database Systems</p>
              <br/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Education;
