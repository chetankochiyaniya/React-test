  /* ===============================
      Example 1
      ================================= */


// class base component
//=====================


// const React = require('react')
// const ReactDOM = require('react-dom/client');


// class App extends React.Component{
//   state = {edata: ["chetan kochiyaniya",21,6353074971]}

//     render() {
//       let list = this.state.edata
//       list = list.map((item,index)=><List item={item} key={index}/>)

//       return <div>
//       <h1>Employees Details</h1>
//       <ul>
//         {list}
//       </ul>
//     </div>;
//   }
// } 

// class List extends React.Component{
//   render(){
//     return <li>{this.props.item}</li>
//   }
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);








//function base component
//=======================


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [data,setData] = useState({edata: ["chetan kochiyaniya",21,6353074971]})
  const list =  data.edata.map((item,ind)=><List item={item} key={ind}/>)

  return (
    <div>
      <h1>Employees Details</h1>
      <ul>{list}</ul>
    </div>
  );
};


const List =(props)=>{
return <li>{props.item}</li>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);