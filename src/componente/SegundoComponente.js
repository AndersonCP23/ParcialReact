import React from 'react'
import PrimerComponente from './PrimerComponente'
import TercerComponente from './TercerComponente'
import CuartoComponente from './CuartoComponente'


function SegundoComponente() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
        <div className="row">
            <div className="col-md-4">
                <PrimerComponente/>
            </div> 
            <div className="col-md-4 rounded-0">
                <TercerComponente/>
            </div>
            <div className="col-md-4">
                <CuartoComponente/>
            </div>
        </div>
    </div>
  )
}

export default SegundoComponente



