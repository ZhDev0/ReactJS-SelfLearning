import React from "react";
import { useState ,useEffect } from "react";


const PageUseEffect=()=>{
    const [name , setName]  = useState("");
    
    

    useEffect(() => {
        
        setName('Omar')
    });

    return(
    <div>
        <h1 style={{color:'red'}}> UseEffect exemple </h1>
       <h3> hello {name}</h3>
    
    </div>
)
}

export default PageUseEffect;