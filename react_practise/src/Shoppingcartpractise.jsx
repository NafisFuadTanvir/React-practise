import {useState} from "react"
const productslist= [


{
   id:111,
   productname:"keyboard",
   stock:10,
   unitPrice:1000
},
{
    id:222,
    productname:"mouse",
    stock:10,
    unitPrice:500
 },
 
 {
    id:333,
    productname:"mousepad",
    stock:10,
    unitPrice:300
 },
 

]



function Tablerow({id,productname,stock,unitPrice,quantity,total}){



    return (
      <div>
        <tr>
          <td>{id}</td>
          <td>{productname}</td>
          <td>{stock}</td>
          <td>{unitPrice}</td>
          <td>{quantity}</td>
          <td>{total}</td>
          <td>
            <button>+</button>
            <button>-</button>
          </td>
        </tr>
      </div>
    );
}












function Shoppingcartpractise(){

    const [Product,setProduct]=useState(
        
        productslist.map((item)=>{

        return {
            ...item,
            quantity: 0,
            total: 0
        };
    }));


return <div>

    <h1>Product list</h1>
    <table>

        <thead>
        <tr>
            <th>Id</th>
            <th>name</th>
            <th>Stock</th>
            <th>price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
        </thead>
        
        <tbody>
            {
                productslist.map((product)=> <Tablerow key={product.id} {...product}></Tablerow>)
            }
        </tbody>
    </table>


</div>
}

export default Shoppingcartpractise;