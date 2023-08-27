
import { useState,useEffect } from "react";




const App=()=>{
  

  const[data,setData]= useState();

  const[newdata,setNewData]= useState();


  //fething data using promise

  useEffect(()=>{


    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(json=>setData(json))


  },[])
   

  
  //fetching data using async wait
  useEffect(()=>{

 
    //creating a imidiate envoked function
    (async()=>{

         let response = await  fetch("https://jsonplaceholder.typicode.com/photos");

         let json= await response.json();

         setNewData(json);



    })()



  },[])






return(



<div>

    {
    
    
    // JSON.stringify(data)
    JSON.stringify(newdata)
    
    }


</div>


)

}

export default App;