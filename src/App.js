  /* ===============================
      Example 1
      ================================= */


//function base component
//=======================

/*
import React from 'react';
import ReactDOM from 'react-dom/client';

//function base 
const App = ({name}) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App name="chetan Kochiyaniya"/>);
*/


// class base component
//=====================

/*
const React = require('react')
const ReactDOM = require('react-dom/client');


class App extends React.Component{
    render() {
      return <h1>Hello, {this.props.name}</h1>;
  }
} 
ReactDOM.createRoot(document.getElementById('root')).render(<App name="chetan Kochiyaniya"/>);
*/


/* 
- ReactDOM.render is no longer supported in React 18.
 
  ReactDOM.render(<App />, document.getElementById('root'));

  */




  /* ===============================
      Example 2
      ================================= */



//function base component
//=======================

/*
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = (props) => {
  return (
    <div>
      <h1>Employees Details</h1>
      <p>name: {props.edata.name}</p>
      <p>age :  {props.edata.age}</p>
      <p>no  : {props.edata.no}</p>
    </div>
  );
};
const Data = {name:"chetan kochiyaniya", age:"21", no: 6353074971 }
ReactDOM.createRoot(document.getElementById('root')).render(<App edata={Data}/>);
*/



// class base component
//=====================


const React = require('react')
const ReactDOM = require('react-dom/client');


class App extends React.Component{
    render() {
      return <div>
      <h1>Employees Details</h1>
      <p>name: {this.props.edata.name}</p>
      <p>age :  {this.props.edata.age}</p>
      <p>no  : {this.props.edata.no}</p>
    </div>;
  }
} 
const Data = {name:"chetan kochiyaniya", age:"21", no: 6353074971 }
ReactDOM.createRoot(document.getElementById('root')).render(<App edata={Data}/>);

