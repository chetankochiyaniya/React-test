  /* ===============================
      Example 1
      ================================= */



//function base component
//=======================


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// const App = (props) => {
//   const [edata,seteData] = useState({edata: ["chetan kochiyaniya",21,6353074971]})
//   return (
//     <div>
//       <h1>Employees Details</h1>
//       <p>name: {edata.name}</p>
//       <p>age :  {edata.age}</p>
//       <p>no  : {edata.no}</p>
//     </div>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<App edata={Data}/>);





// class base component
//=====================


// const React = require('react')
// const ReactDOM = require('react-dom/client');


// class App extends React.Component{
//  /* constructor() {
//     super()
//     this.state = {
//       edata: ["chetan kochiyaniya",21,6353074971]
//     }
//   } */
//   // OR 
//   // below code
//   state = {edata: ["chetan kochiyaniya",21,6353074971]}


//     render() {
//       return <div>
//       <h1>Employees Details</h1>
//       <p>name: {this.state.edata[0]}</p>
//       <p>age :  {this.state.edata[1]}</p>
//       <p>no  : {this.state.edata[2]}</p>
//     </div>;
//   }
// } 

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);





  /* ===============================
      Example 2
      ================================= */



//function base component
//=======================


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [data,setData] = useState({edata: ["chetan kochiyaniya",21,6353074971],city:"Botad"})

  setTimeout(() => {
    setData(prevState => ({ ...prevState, city: "Sankardi" }));
  }, 5000);
  return (
    <div>
      <h1>Employees Details</h1>
      <p>name: {data.edata[0]}</p>
      <p>age :  {data.edata[1]}</p>
      <p>no  : {data.edata[2]}</p>
      <p>city: {data.city}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);





// class base component
// =====================


// const React = require('react')
// const ReactDOM = require('react-dom/client');


// class App extends React.Component{
//  /* constructor() {
//     super()
//     this.state = {
//       edata: ["chetan kochiyaniya",21,6353074971]
//     }
//   } */
//   // OR 
//   // below code
//   state= {
//     edata: ["chetan kochiyaniya",21,6353074971], 
//     city:"Botad"
// }


//     render() {
    
//       setTimeout(()=>{
//         this.setState({
//           city: "Sankardi"
//         })
//       },5000)

//       return <div>
//       <h1>Employees Details</h1>
//       <p>name: {this.state.edata[0]}</p>
//       <p>age :  {this.state.edata[1]}</p>
//       <p>no  : {this.state.edata[2]}</p>
//       <p>city: {this.state.city}</p>
//     </div>
//   }
// } 

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
