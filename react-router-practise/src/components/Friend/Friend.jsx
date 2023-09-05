import React from 'react';
import "./friend.css"
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {

    const {id,name,email}= friend;
        return (
        <div className='fr'>
            <h3>Name is:-{name}</h3>
            <p>Email address:-{email}</p>
           <p><Link className='cl' to={`/friend/${id}`}>Show more deatails</Link></p>
        </div>
    );
};

export default Friend;