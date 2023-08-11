import React from 'react';

const Button = ({text,onClick,disabled,customstyle}) => {


    const style={

        padding:'o.25rem 1rem',
        backgroundColor:'#ddd',
        color:' #212121',
        borderRadius:'0.10rem',
        cursor:'pointer',
        border:'none',
        ...customstyle,
        
    }
   
    return <button style={style} onClick={onClick} disabled={disabled} >{text}</button>
};

export default Button;