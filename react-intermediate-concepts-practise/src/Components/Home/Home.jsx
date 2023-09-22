import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import "./Home.css"
import Cart from '../Cart/Cart';

const Home = () => {

    const tshirts= useLoaderData();

    const [cart,Setcart]= useState([]);

    const loadDatahandler= (tshirt)=>{
         

        const exists= cart.find(tsh=> tsh._id === tshirt._id);

        if(exists){
            
            alert("you already added the product");
        }
        else{
            const newcart=[...cart,tshirt];
            Setcart(newcart);
        }
        
    }
    const removeCart= id=>{
        
        const remaining= cart.filter(tshirt=> tshirt._id !== id);

        Setcart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
                tshirts.map(tshirt=> <Tshirt key={tshirt._id}
                 
                    tshirt={tshirt}
                    loadDatahandler={loadDatahandler}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeCart={removeCart}></Cart>
            </div>
        </div>
    );
};

export default Home;