import React from "react";

class Form extends React.Component{

    state={
            id:'',
            name:'',
            // input:"",
      }
handleSubmit=(e)=>{
    e.preventDefault()
    this.props.AddItems(this.state)
    this.setState({
        name:""
    })
}

 handleChange=(e)=>{
    this.setState({
        name: e.target.value,
     })
    console.log(e.target.value)
    console.log(this.state)
}
    render(){

        return(
        <div>


            
            <h1>{this.state.input}</h1>
            <form onSubmit={this.handleSubmit}>
           name <input name="name"  onChange={this.handleChange}  value={this.state.name}></input>
           <button>add new</button>
           </form>
        </div>
        )
    }
}
export default Form 