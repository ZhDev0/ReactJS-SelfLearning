import React from "react";
import axios from "axios";
import "./navbar.css"

class Person extends React.Component {
state= {
    user : []
}

componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(data => {
        console.log(data.data) 
        this.setState({
            user: data.data
        })
    
})  
}
 render(){
    const person = this.state.user
    return (
    <div class="">
        {person.map(value =>
        <div class ="div" key={value.id}>
       <p class='p'><h1>Name : </h1> {value.name}</p>
       <p><h1>Email: </h1> {value.email}</p>
       </div>
        )}
        </div>
    )
 }  
}

export default Person 