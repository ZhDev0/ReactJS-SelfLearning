import React from "react";
import { useState } from "react";


const PageUseState=()=>{
    const [name , setName]  = useState("hicham");
    
   const setData=()=>{
        setName('bilal')
    }   

    return(
    <div>
        <h1 style={{color:'red'}}>Use state exemple </h1>
       <h3> hello {name}</h3>
       <button onClick={setData}> set name</button>
    </div>
)
}

export default PageUseState;