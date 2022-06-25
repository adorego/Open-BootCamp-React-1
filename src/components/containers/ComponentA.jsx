import { CONNECTION } from '../../models/Connection.enum'
import ComponentB from '../pure/ComponentB';
import { Contacto } from '../../models/Contacto.class'
import React from 'react'

function ComponentA(props) {
    const contact = new Contacto("Juan", "Perez", "juan@gmail.com", CONNECTION.connected)
  return (
    <ComponentB contact={contact}/>
  )
}

ComponentA.propTypes = {}

export default ComponentA;
