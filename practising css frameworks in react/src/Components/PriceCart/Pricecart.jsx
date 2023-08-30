import Feature from "../Feature/Feature";

const Pricecart = ({price}) => {



    return (



        <div className="bg-indigo-500 mt-4 rounded-md p-4 text-white flex flex-col">

       <h2 className="text-center">

        <span className="text-5xl text-purple-400 font-bold " > {price.price} </span>
        <span className="text-2xl">/Month</span>
            
       </h2>
       
        <h5 className="text-blue-700 text-3xl text-center my-6 ">Subscription: {price.type}</h5>

        <p className="underline font-bold text-lime-400">Features:- </p>
        {
            price.features.map((feature,idx)=> <Feature feature={feature} key={idx}></Feature>)
        }

        <button className="w-full font-bold hover:bg-rose-300 bg-orange-700 text-white py-3 rounded-md mt-auto">Buy Now</button>
        </div>
    );
};

export default Pricecart;