import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./frienddetatils.css"

const Frienddetails = () => {

    const details= useLoaderData();

    console.log(details)
    return (

        <div>
            <h1>Informations</h1>
            <ul>
                <li>Username: {details.username}</li>
                <li>adress: {details.website}</li>
                <li>adress: {details.phone}</li>

            </ul>
        </div>
    );
};

export default Frienddetails;