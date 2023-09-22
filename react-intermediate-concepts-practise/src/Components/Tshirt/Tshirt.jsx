import React from 'react';
import "./Tshirt.css";

const Tshirt = ({tshirt,loadDatahandler}) => {

       const {picture,name,gender,price}= tshirt;
    return (
        <div className="tshirts">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price:${price}</p>
            <button onClick={()=>loadDatahandler(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;