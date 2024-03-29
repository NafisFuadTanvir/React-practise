import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Numberfield from './Components/Ui/Numberfield';

import Button from './Components/Ui/Button';
/*
1: handle input data field
2: handle operations
3: handle a list of histories
4:render history list
5: restore the history
*/

const initialstate= {
  a:20,
  b:30,
};


function* generateid(){
 
  let id=0;

  while(true){

   yield id++
  }
}


const getid= generateid();



function App() {


  const[inputstate,setInputstate]= useState({...initialstate});

  const [result,setresult]= useState(0);
   
  const [historylist,setHistorylist]= useState([]);
  

  const handleinputfields=(e)=>{


    setInputstate({
      ...inputstate,
      [e.target.name]: parseFloat([e.target.value])
    })

  }



    
  const handleClearops=()=>{


    setInputstate({...initialstate});

    setresult(0);


  }


  const handleArithmaticops=(operations)=>{



    if(!inputstate.a || !inputstate.b){

      alert('invalid input');

      return;

    }

  const f= new Function(`operations`,`return ${inputstate.a} ${operations} ${inputstate.b}`)

  const result= f(operations);
    
  setresult(result)


  const historyitem={


    id:getid.next().value,

    input: inputstate,
    operations,
    result,
    date: new Date(),
  


  }

  setHistorylist([historyitem,...historylist]);

  }


  return (
    

    <div style={{width:'50%',margin: '0 auto'}}>
 

  <h1> Result: {result}</h1>

  <div>
    <p>Inputs</p>
    <Numberfield value={inputstate.a} name='a'  onChange={handleinputfields} />
    <Numberfield  value={inputstate.b} name ='b' onChange={handleinputfields} />
  </div>

  <div>
    <p>Operations</p>

    <Button text={'+'} onClick={()=> handleArithmaticops('+')}></Button>
    <Button text={'-'} onClick={()=> handleArithmaticops('-')}></Button>
    <Button text={'*'} onClick={()=> handleArithmaticops('*')}></Button>
{/*     
    <button onClick={()=> handleArithmaticops('+')}>+</button>
    <button onClick={()=> handleArithmaticops('-')}>-</button>
    <button onClick={()=> handleArithmaticops('*')}>*</button> */}
    <button onClick={()=> handleArithmaticops('/')}>/</button>
    <button onClick={()=> handleArithmaticops('%')}>%</button>
    <button onClick={ handleClearops}>clear</button>
  </div>

  <div>
 
  <p>History</p>


  {
   historylist.length === 0 ? (<p><small>no history</small></p>)  : (
   
   <ul>
  

    {
      historylist.map((historyitem)=>
 

        <li key={historyitem.id}>
        <p>operation: {historyitem.input.a}{historyitem.operations}{historyitem.input.b}, Result: {historyitem.result} </p>
        <small>8/6/2023</small>
        <br />
  
        <button>reset</button>
      </li>

      )
    }
   
  </ul>)

  }
   
   

    
    
  </div>
       
    </div>

  );
}

export default App;
