import { Contacto } from '../../models/Contacto.class';
import PropTypes from 'prop-types';
import React from 'react';
import classes from './ComponentB.module.css';

const ComponentB = (props) => {

    const connectedChanged = () =>{
       
        props.contact.conectado = !props.contact.conectado;

        console.log(props.contact.conectado);
    }
    return (
        <div>
            <h1>Nombre:{props.contact.nombre}</h1>
            <h1>Apellido:{props.contact.apellido}</h1>
            <h2>Email:{props.contact.email}</h2>
            <input type="checkbox" value={props.contact.conectado} onChange={connectedChanged} />
                
               
          

        </div>
    );
};


ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};


export default ComponentB;
