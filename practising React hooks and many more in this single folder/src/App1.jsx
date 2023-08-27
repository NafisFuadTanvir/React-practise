import { useState } from "react";

function App1() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");



  const addTolist = () => {
    list.push(item);

    setList([...list]);
         
    
  };


  const removeItem=(index)=>{

      
    list.splice(index,1);

    setList([...list])



  }

  return (
    <div>
 

  <h1>My simple To do App</h1>
      <table>
        <tbody>

          {list.length !== 0 ? (

            list.map((listitem, index) => {
              return (
                <tr>
                  <td>{listitem}</td>

                  <td>
                    <button onClick={(index)=>{ removeItem(index)}}>Remove</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>

      <input
        onChange={(event) => {
          setItem(event.target.value);
        } }
        placeholder="Enter the item"
      />

      <button onClick={addTolist}>Add</button>
    </div>
  );
}

export default App;
