import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Form from './components/Forms';
import React from 'react';


class App extends React.Component {
  state={
    data:[
      {id:1 ,name:'Omar'},
      {id:2,name:'Chaimae'}
    ],
    count : 2
  }
 AddData=(value)=>{
  
  value.id = this.state.count +1
  this.setState({count:value.id})
  const newData = this.state.data
  newData.push(value)
  this.setState({
    data:newData
  })
  console.log(this.state.data)

 }

 

render(){
  return (
  <div>
    <Table data={this.state.data} />
    <br></br>
    <Form AddItems={this.AddData} />
  </div>
  );
}
}

export default App;
