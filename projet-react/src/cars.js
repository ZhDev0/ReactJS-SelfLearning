import React, { Component } from 'react';

export const car = ["car1" ,"car2","null"];


class Cars extends React.Component{
    
    // Arrow Function
    showAlert =()=>{
        return alert(this.state.car1);
    }
    // Arrow function
    names = ()=> 'Cars Namee : ';
    
    // state
    state = {
        car1 : car[0],
        car2 : car[1],
        car3 : car[2]
    
    }
// change State
changeState = ()=>{
    this.setState({
        car3 : "car3",
    })
}

render(){
    return(
        <div>
            <h1>{this.names()}</h1>
            <h2>{this.state.car1}</h2>
            <h2>{this.state.car2}</h2>
            <h2>{this.state.car3}</h2>
            <button onClick={this.showAlert}>Alert</button>
            <button onClick={this.changeState}>change state</button>
        </div>

    )
}
}

export class StateLess extends React.Component{
render(){
    return (
        <h1>StateLess Component</h1>
    )
}

}
                 
export class StateFul extends React.Component{

state={
    Name:'StateFull Component'
}
    render(){
    return (
        <h1>{this.state.Name}</h1>
    )
}

}
                 
export default Cars ;