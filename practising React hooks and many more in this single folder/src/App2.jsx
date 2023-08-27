import { useState } from "react";

function App() {



  const [Forminput,setForminput]= useState({


    Fname: "",
    Lname: "",
    city: "",
    Gender:""
})
  

   const onInputChange=(property,value)=>{


    setForminput(preobj=>({

      ...preobj, [property]:value
    }))


   }

   const FormSubmit=(e)=>{

    e.preventDefault();


   }


  return (



    <div className="container">
        


        <h1>First name is:- {Forminput.Fname} <br/> last name is:- {Forminput.Lname}</h1>
        <h3>City is:- {Forminput.city}</h3>

        <p>Gender:- {Forminput.Gender}</p>


    <form onSubmit={FormSubmit} action="">

    <input onChange={(e)=>{onInputChange("Fname",e.target.value)}} value={Forminput.Fname} placeholder="First Name" /> <br />
    <input  onChange={(e)=>{onInputChange("Lname",e.target.value)}}  value={Forminput.Lnamae} placeholder="Last Name" /> <br />

    <select onChange={(e)=>{onInputChange("city",e.target.value)}} value={Forminput.city}>
       
       <option value=''>Select City</option>
       <option value="Dhaka">Dhaka</option>
       <option value="Chittagong">Chittagong</option>
       <option value="kumilla">Kumilla</option>
     </select>
 
 <br />

 <input onChange={()=>{onInputChange("Gender","Male")}} checked={Forminput.Gender==="Male"} type="radio" name="Gender"/>Male 

 <input onChange={()=>{onInputChange("Gender","Female")}} checked={Forminput.Gender==="Female"} type="radio" name="Gender" />Female <br />

 <button>submit</button>




    </form>


      
      

    </div>



  )
}

export default App;
