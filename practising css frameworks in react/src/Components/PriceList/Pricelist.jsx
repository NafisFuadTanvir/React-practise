import { useEffect, useState } from "react";
import Pricecart from "../PriceCart/Pricecart";

const Pricelist = () => {


    const[prices,setPrices]= useState([]);

    useEffect(()=>{

        fetch("pricelist.json")
        .then(res=>res.json())
        .then(data=>setPrices(data))
        

    },[])

    

    return (
        <div className="mx-12">
            <h2 className="text-4xl text-center text-blue-150 bg-purple-400 p-4 mt-4 rounded-sm">Select prices from this list</h2>

            <div className="grid md:grid-cols-3 gap-3">
                   

            {
                prices.map(price=> <Pricecart key={price.id} price={price}></Pricecart>)
            }

            </div>

            
        </div>
    );
};

export default Pricelist;