import React, { useState} from "react";
import PropTypes from 'prop-types'
const CounterApp = ({valor}) => {
   
  const [counter,setCounter]= useState(valor);
  
  // handleadd
  const handleadd= ()=>{
    setCounter(counter+1);
  }
  const handlerest= ()=>{
    setCounter(counter-1);
  }

  const handlereset = ()=>{
    setCounter(valor);
  }

  return (
    <>

      <h1>CounterApp</h1>
      <p> {counter} </p>
      <button onClick={ handleadd }>+1</button>
      <button onClick={ handlereset }>reset</button>
      <button onClick={ handlerest }>-1</button>

    </>
  );
};

CounterApp.propTypes={
    valor:PropTypes.number.isRequired
}

CounterApp.defaultProps={
    valor:100
}

export default CounterApp;


