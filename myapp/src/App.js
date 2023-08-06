import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/*
1: handle input data field
2: handle operations
3: handle a list of histories
4:render history list
5: restore the history
*/

const initialstate= {
  a:0,
  b:0
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
    
  setresult(f(operations))


  const history={


    id:getid.next().value,

    input: inputstate,
    operations,
    date: new Date(),

  }

  console.log(history)

  }


  return (
    

    <div style={{width:'50%',margin: '0 auto'}}>
 

  <h1> Result: {result}</h1>

  <div>
    <p>Inputs</p>
    <input type="number" value={inputstate.a} name='a'  onChange={handleinputfields} />
    <input type="number" value={inputstate.b} name ='b' onChange={handleinputfields} />
  </div>

  <div>
    <p>Operations</p>
    <button onClick={()=> handleArithmaticops('+')}>+</button>
    <button onClick={()=> handleArithmaticops('-')}>-</button>
    <button onClick={()=> handleArithmaticops('*')}>*</button>
    <button onClick={()=> handleArithmaticops('/')}>/</button>
    <button onClick={()=> handleArithmaticops('%')}>%</button>
    <button onClick={ handleClearops}>clear</button>
  </div>

  <div>
 
  <p>History</p>
   
   <p><small>no history</small></p>

    
    <ul>

      <li>
        <p>operation: 10+20, Result: 30 </p>
        <small>8/5/2023</small>
        <br />

        <button>reset</button>
      </li>
    </ul>
  </div>
       
    </div>

  );
}

export default App;
