import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

// Functional component (simple components)
// const Hello = (props) => {
//   const { name, age } = props; // variable desconstructuring
//   // creates variables name and age from props

//   // return <h1>Hello { props.name }</h1> // interpolation to access props.name
//   // eslint-disable-next-line react/jsx-one-expression-per-line
//   return <h1>Hello { name }, { age } years old.</h1>;
// };

// Class component - more complex(states)

// 'class Hello < React.Component'
// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props; // variable desconstructuring
//     // creates variables name and age from props
//     return <h1>Hello { name }, { age } years old.</h1>;
//   }
// }

// Select the element
const container = document.querySelector("#root");

if (container) {
  // create root component
  const root = ReactDOM.createRoot(container);
  // render something in the root
  // root.render("Hello!");
  // root.render(<h1>Hello!</h1>);
  // root.render(<Hello />) // calling a function
  // root.render(<Hello name="Tirso" age="21" />); // calling a component(Hello) with props('params')
  root.render(<App />);
}
