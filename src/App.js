// import React from 'react';
// import ReactDOM from 'react-dom/client';

// //function base 
// const App = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };

// const rootNode = document.getElementById('root');
// const root = ReactDOM.createRoot(rootNode);
// root.render(React.createElement(App));

// class base component

const React = require('react')
const ReactDOM = require('react-dom/client');


class App extends React.Component{
    render() {
      return <h1>Hello, World!</h1>;
  }
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

/* 
- ReactDOM.render is no longer supported in React 18.
 
  ReactDOM.render(<App />, document.getElementById('root'));

  */
