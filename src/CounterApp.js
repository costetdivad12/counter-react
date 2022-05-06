import React from "react";
import PropTypes from 'prop-types'
const CounterApp = ({valor}) => {
    // console.log(props);
 
    // const saludo='hola mundo ';
    // const saludo= {
    //    nombre:'David Costet',
    //    edad: 30
    // };
  return (
    <>
      {/* <pre> {JSON.stringify(saludo) } </pre>  */}
      <h1>CounterApp</h1>
      <p> {valor} </p>
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


