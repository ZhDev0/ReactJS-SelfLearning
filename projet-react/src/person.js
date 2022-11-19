import React from "react";

 class Home extends React.Component {
     render(){
     const value = this.props.data;
     const Show_Data = value.map(value=>{
        if (value.id == 1) {
            return (
                <div>
                    <p>id :{value.id}</p>
                    <p>Nom :{value.Name}</p>
                    <p>Age :{value.age}</p>
                </div>
            )     
        }
       
     })
    return (
        <div>
            <p> {Show_Data}</p>
        </div>
    )
 }
    
}
export default Home ;