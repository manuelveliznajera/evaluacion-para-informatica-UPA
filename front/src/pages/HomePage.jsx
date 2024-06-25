import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../src/App.css';
import Logo from '/img/logo-upa.png'


export const HomePage = () => {

  return (
    <>
    <div>
        <Link to='/views/FormPage'>
          <img src={Logo} className="logo" alt="Vite logo" />
        </Link>
        
      </div>
      <h1>Bienvenidos al Portal UPA</h1>
      <div className="card">
        <div className='button-container'>

            <Link className='btn' to='/Registrar' >
            Registarse
            </Link>

            <Link className='btn' to='/Reportes' >
            Reportes
            </Link>
        </div>
        <p>
          Todos los derechos Reservados @2024 Ing. Manuel Veliz
        </p>
      </div>
      
      </>
  )
}
