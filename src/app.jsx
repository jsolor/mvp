import React from 'react';
import './app.scss';
import Nav from './components/nav.jsx';
import Start from './components/start.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';
import Education from './components/education.jsx';
import Comments from './components/comments.jsx';
import bg from './images/stone-background-17.jpg';

function App() {
  return (
    <div>
      <img
        src={bg}
        alt="bg"
        style={{
          zIndex: '-4',
          position: 'fixed',
          left: '0',
          top: '0'
        }}
      />
      <div className="App">
        <Nav />
        <Start />
        <div>
          <About />
          <Projects />
          <Education />
          <Experience />
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
