import { useState } from "react";


// function Listitem(props) {
//   console.log(props);
//   return (
//     <li
//       style={{ listStyleType: "none", display: "flex", alignItems: "center" }}
//     >
//       <input type="checkbox" checked={props.checked} />
//       <p>{props.title}</p>
//       <button style={{ marginLeft: "50px" }}>Delete</button>

//       {props.children}
//     </li>
//   );
// }






// 




// function App() {

//     const itemarr= items.map((item)=> <Listitem key={item.id} title={item.title} check={item.checked}> how is the react learning going: </Listitem> );

//   return (
//     <div style={{ backgroundColor: "pink" }}>
//       <ul>
       
//       {itemarr}
//       </ul>
//     </div>
//   );
// }





function Productlistitem(props){

    const [count,setcount]= useState(0);




const increment =()=>{
  

    if(count<props.stock){
        setcount(count+1);
    }
    

}

const decrement =()=>{
  

    if(count>0){
        setcount(count-1);
    }
    

}


   return  <div>

<div>
    <p>{props.productname}</p>
    <p>{count}/{props.stock}</p>
     <button onClick={increment} disabled={count==props.stock}>increment</button>
     <button onClick={decrement} disabled={count==0}>Decrement</button>
    </div>


   </div>
   
   

}








function App(){

 return (

<div>
   
   <Productlistitem productname="keyboard" stock={10}></Productlistitem>
   <Productlistitem productname="mouse" stock={15}></Productlistitem>
   <Productlistitem productname="mobile display" stock={0}></Productlistitem>

</div>

    ) 
}
export default App;
