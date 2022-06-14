import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional component
const Hello = (props) => {
  const { name, age } = props;
  return <h1>Hello { name }, { age } years old.</h1>;
};

// Class component

const container = document.querySelector("#root");

console.log('connected');

if (container) {
  // create root
  const root = ReactDOM.createRoot(container);
  // render something in the root
  root.render(<Hello name="Luis" />); // calling a component (Hello)
}
