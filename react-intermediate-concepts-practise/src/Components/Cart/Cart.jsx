import React from 'react';

const Cart = ({cart,removeCart}) => {
    return (
        <div>
            <h2>Product summury</h2>
            {
                cart.map(tshirt=> <p key={tshirt._id}>{tshirt.name} 
                
                <button onClick={()=> removeCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;