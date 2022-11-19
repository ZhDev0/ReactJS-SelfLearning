import React, { useRef } from "react";
import { useState ,useEffect } from "react";


const PageUseRef=()=>{


  const RefInputName =useRef();
  const RefInputAge =useRef();
    const [name , setName]  = useState("");
    
   const handleChange=()=>{
        console.log(RefInputName.current.value)
        console.log(RefInputAge.current.value)
    }

    useEffect(() => {

        setName('hicham')
    });

    return(
    <div>
        <h1 style={{color:'red'}}> UseRef exemple </h1>

        Name<input ref={RefInputName} onChange={handleChange}></input><br></br>
        Age<input ref={RefInputAge} onChange={handleChange}></input>
        
       <h3> hello {name}</h3>
    
    </div>
)
}

export default PageUseRef;