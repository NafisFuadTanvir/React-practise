import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phonebar = () => {


    const [phones,setPhones]= useState();


    useEffect(()=>{

        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(response=>response.json())
        // .then(data=>setPhones(data))

        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data=>{

            const loadeddata= data.data.data;
            const phonedata= loadeddata.map(phone=>{
                     
                const part= phone.slug.split("-");
                const price= parseInt(part[1]);
                const phoneInfo={
                   
                    name: phone.phone_name,
                    price:price


                }

                return phoneInfo;


            })
              

            setPhones(phonedata);
           
         


        });




    },[])

    return (
        <div>
            
            <BarChart width={1000} height={500} data={phones}>
                  
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>

            </BarChart>


        </div>
    );
};

export default Phonebar;