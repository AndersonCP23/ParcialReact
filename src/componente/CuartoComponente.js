import React from 'react'

import image3 from '../activo/image3.jpg'
function CuartoComponente() {
  return (
    <div className="card text-center bg-dark">
        <img src={image3} alt="" /> 
      <div className="card-boby text-light">
        <h4 className="card-title">Arte</h4>
        <p className="card-text text-secondary">You should import individual components like: rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.react-bootstrap/Button </p>
        <a href="#!" className="btn btn-outline-secondary rounded-0">
            Mas informacion 
        </a>
      </div>
    </div>
  )
}

export default CuartoComponente
