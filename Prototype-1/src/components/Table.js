import React from "react";
class Table extends React.Component{
   
    componentDidMount(){
        console.log(this.props.data)
    }

    render(){
        const data = this.props.data;
        const show_data= data.map((value)=>{
            return (
                <tr>
                <td> {value.id}</td>
                <td> {value.name}</td>
                </tr>
            )
        })

         return(
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {show_data}
                        
                    </tbody>
                </table>
            
            </div>

         )
     }
}  

export default Table ;