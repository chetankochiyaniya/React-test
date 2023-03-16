// import React from 'react';
// import ReactDOM from 'react-dom';
const React = require('react')
const ReactDOM = require('react-dom');

class App extends React.Component{
    render() {
      return <h1>Hello, World!</h1>;
  }
}

//function base 

// const App = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById('root'));
