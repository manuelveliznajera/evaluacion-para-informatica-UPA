import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {  ReportePage } from '../pages/ReportePage'
import { HomePage } from '../pages/HomePage'
import { RegisterPage } from '../pages/RegisterPage'
import { IngresarPunteo } from '../pages/IngresarPunteo'

export const AppRouter = () => {
  return (
   <>
        <Routes >
            <Route path='/' element ={ <Navigate to='/Home' />} />
            <Route path='/Registrar' element ={ <RegisterPage />} />
            <Route path='/Reportes' element ={ <ReportePage />} />
            <Route path='/ingresar_punteo' element ={ <IngresarPunteo />} />


            <Route path='/home' element ={ <HomePage />} />


        </Routes>

   </>
  )
}
