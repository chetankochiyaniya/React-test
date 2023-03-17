import React from "react";
// class List extends React.Component{
//     render(){
//       console.log(this.props)
//       return <><li>{this.props.item}</li><span onClick={()=>this.props.handelOnDelete(this.props.item)}>del</span></>
//     }
//   }
//   module.exports = List;
const List =(props)=>{
  return <><li>{props.item}</li><span onClick={()=>props.handelOnDelete(props.item)}>del</span></>
  }
  export default List;
