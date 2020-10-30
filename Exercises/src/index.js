import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App0 from './classEX';
import App1 from './day1';
import App2 from './day2'
import Day3and4 from './day3-4';

let app = <App1 />

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app0">Class Exercises</a> &nbsp;
      <a href="/" className="x" id="app1">Day 1</a> &nbsp;
      <a href="/" className="x" id="app2">Day 2</a> &nbsp;
      <a href="/" className="x" id="day3and4">Day 3-4</a> &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  )
}

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return
  }
  const id = event.target.id;
  switch (id) {
    case "app0": app = <App0 />; break;
    case "app1": app = <App1 />; break;
    case "app2": app = <App2 />; break;
    case "day3and4": app = <Day3and4 />; break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));


