import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import "./friends.css"

const Friends = () => {

    const friends= useLoaderData();
    
    return (
        <div>
            <h2>They act as friends but they are not.Their number is: {friends.length}</h2>
           
           <div className='frs'>
            {
                friends.map(friend=><Friend key={friend.key} friend={friend}></Friend>)
            }

           </div>
          
        </div>
    );
};

export default Friends;