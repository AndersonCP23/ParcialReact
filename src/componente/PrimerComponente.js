import React from 'react'

import image1 from '../activo/image1 (1).jpg'

function PrimerComponente() {
  return (
    <div className="card text-center bg-dark">
        <img src={image1} alt="" /> 
      <div className="card-boby text-light">
        <h4 className="card-title">Youtube</h4>
        <p className="card-text text-light">Fue creado por tres antiguos empleados de PayPal en febrero de 20053​ y, en octubre de 2006 fue adquirido por Google Inc. a cambio de 1650 millones de dólares y ahora opera como una de sus filiales. Es el sitio web de su tipo más utilizado en internet. </p>
        <a href="https://www.youtube.com/" className="btn  btn-outline-danger ">
             Ir al Sitio web 
        </a>
      </div>
    </div>
  )
}

export default PrimerComponente
