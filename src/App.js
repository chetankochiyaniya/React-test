  /* ===============================
      Example 1
      ================================= */


// class base component
//=====================


const React = require('react')
const ReactDOM = require('react-dom/client');


class App extends React.Component{
 /* constructor() {
    super()
    this.state = {
      edata: ["chetan kochiyaniya",21,6353074971]
    }
  } */
  // OR 
  // below code
  state = {edata: ["chetan kochiyaniya",21,6353074971]}

    render() {
      let list = this.state.edata
      list = list.map((item)=><li key={item}>{item}</li>)

      return <div>
      <h1>Employees Details</h1>
      <ul>
        {list}
      </ul>
    </div>;
  }
} 

ReactDOM.createRoot(document.getElementById('root')).render(<App />);








//function base component
//=======================


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// const App = () => {
//   const [data,setData] = useState({edata: ["chetan kochiyaniya",21,6353074971]})
//   const list =  data.edata.map((item,ind)=><li key={ind}>{item}</li>)

//   return (
//     <div>
//       <h1>Employees Details</h1>
//       <ul>{list}</ul>
//     </div>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);