import React from "react";

class Person extends React.Component{
    render(){

        const Show_Data=data.map( values => {
            return (
                 <div key={values.id}>
                 <p>{values.id}</p>
                 <p>{values.Name}</p>
                 <p>{values.age}</p>
                 </div>  
            )
        })
        return(
            <main>
                {Show_Data}
                </main>
        )
    }
}
export default Person ;