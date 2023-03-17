  /* ===============================
      Example 1
      ================================= */


// class base component
//=====================


// const React = require('react')
// const ReactDOM = require('react-dom/client');
// const List = require('./js/List');
// require('./css/app.css')


// class App extends React.Component{
//   state = {edata: ["chetan kochiyaniya",21,6353074971]}

//     render() {
//       let list = this.state.edata
//       list = list.map((item,index)=><List item={item} key={index} handelOnDelete={this.onDelete}/>)
    
//       return <div>
//       <h1>Employees Details</h1>
//       <ul>
//         {list}
//       </ul>
//     </div>;
//   }
//   onDelete =(item)=>{
//     const updatedlist = this.state.edata.filter((val)=>item!==val)
//     this.setState({edata:updatedlist})
//   }
// } 


// ReactDOM.createRoot(document.getElementById('root')).render(<App />);








//function base component
//=======================


import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import List from './js/List';
import './css/app.css'

const App = () => {
  const [data,setData] = useState({edata: ["chetan kochiyaniya",21,6353074971]})
  const onDelete  =(item)=>{
    const updatedList = data.edata.filter((val)=> item !== val)
    setData({edata:updatedList})
  }

  const list =  data.edata.map((item,ind)=><List item={item} key={ind} handelOnDelete={onDelete}/>)

  const Temp=()=>{
    console.log("worked")
  }
  return (
    <div>
      <h1>Employees Details</h1>
      <ul>{list}</ul>
      <Test>
        Hiii
      </Test>
      <Test>
        <div onClick={Temp}>Hello chetan</div>
      </Test>
    </div>
  );
};

const Test = (props)=>{
  return <><p>Hello i'm on test component</p>{props.children}</>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);