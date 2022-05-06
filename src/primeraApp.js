import React from "react";
import PropTypes from 'prop-types'
const PrimeraApp = ({saludos,subtitulos}) => {
    // console.log(props);
 
    // const saludo='hola mundo ';
    // const saludo= {
    //    nombre:'David Costet',
    //    edad: 30
    // };
  return (
    <>
      {/* <pre> {JSON.stringify(saludo) } </pre>  */}
      <h1>{saludos}</h1>
      <p> {subtitulos} </p>
    </>
  );
};

PrimeraApp.propTypes={
 saludos:PropTypes.string.isRequired
}
PrimeraApp.defaultProps={
  subtitulos:'soy un subtitulo'
}
export default PrimeraApp;
