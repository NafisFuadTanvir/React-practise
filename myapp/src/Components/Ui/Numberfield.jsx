import React from 'react';
import propTypes from 'prop-types'

const Numberfield = ({value,onChange,name}) => {

  const style={

    padding:'o.25rem 1rem',
    borderRadius: '0.1rem',
    border: '1px solid gray',
    background:'#fff',
    outline: 'none',


   }


    return <input style={style} type='number' value={value} onChange={onChange} name={name}></input>
};

Numberfield.propTypes={

    value:propTypes.number.isRequired,
    name:propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}

export default Numberfield;