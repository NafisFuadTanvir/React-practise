import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
 

      const [isopen,setisOpen]= useState(false);

    const lists = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Contact", path: "/contact" },
      ];
      

    return (
        
        <nav className="py-4 px-4 w-full">

            <div onClick={()=> { setisOpen(!isopen)}}className="md:hidden">

               <span> {
               isopen=== true ? 
                <XMarkIcon  className="h-6 w-6 text-purple-500" />
               
               : <Bars3Icon  className="h-6 w-6 text-purple-500" />
               
               }</span>
          
            </div>
            

            

         <ul className={`md:flex absolute md:static duration-500 pl-4 bg-purple-400
          ${ isopen ? "top-6":
        
       "-top-36" }`}>
           
           {
                       lists.map((lis)=> <Link key={lis.id} lis={lis}></Link>)

           }

         </ul>


        </nav>
    );
};

export default Navbar;