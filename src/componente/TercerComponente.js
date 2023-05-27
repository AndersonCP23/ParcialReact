import React from 'react'

import image2 from '../activo/image2.jpg'

function TercerComponente() {
  return (
    <div className="card text-center bg-dark">
        <img src={image2} alt="" /> 
      <div className="card-boby text-light">
        <h4 className="card-title">Paisajes</h4>
        <p className="card-text text-light">El mundo que nos rodea siempre ha fascinado al ser humano. Ya en la Edad Media el paisaje se concebía como una obra divina y su representación hacía referencia a su Creador.La soberbia de algunos páramos o la simple belleza de los escenarios más cotidianos también han sido la inspiración de grandes pintores de todas las épocas y lugares.</p>
        <a href="https://www.nationalgeographic.com.es/temas/paisajes" className="btn btn-outline-primary ">
        Ir al Sitio web 
        </a>
      </div>
    </div>
  )
}

export default TercerComponente
