import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SpanError } from '../components/SpanError';
import { convertAge } from '../utils/convertAge';
import Navbar from '../components/NavBar';


export const RegisterPage = () => {

      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const [ageUser, setAgeUser] = useState(0);

      const resetear =()=>{
        reset();
        setAgeUser(0)
      }

      const ageFunction =(e)=>{
        if (e.target.value) {      
          const date = e.target.value;      
          const age = convertAge(date);
          setAgeUser(age);
        }else{
          toast.error("Fecha invalida!", {
            position: "top-right"
          });
        }
      }

      const handSubmit =async (data, e)=>{
        const info = {...data, edad:ageUser}
        try {
          const response = await fetch('http://localhost:3000/api/usuarios/registrar', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
              });

         if (!response.ok) {
            toast.error("Error Url o Peticion invalida!", {
            position: "top-right"
            });

         }
         
         const result = await response.json();

         if (response.status==201 || response.status==202) {
                  toast.warning(result.mensaje, {
                      position: "top-center"
                      });
                      
                return;
              }

          toast.success(result.mensaje, {
              position: "top-center"
              });
              // resetear()
        } catch (error) {
          toast.error("Error servirdor!" + error,  {
            position: "top-right"
          });
          
        }
      }
  return (
    <div>
      <Navbar url={'Reportes'} />
      <form onSubmit={ handleSubmit(handSubmit)} >
            <h2>Registro</h2>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text"  name="nombre" 
                { ...register('nombre', {
                  required:'Nombres requerido',
                   pattern:{
                    value:"[A-Za-z]+" ,
                    message:'Solo se admite letras: [a-Z]'
                   } 
                  })}
             />

             {
              errors.nombre ?(<span className='error'> {errors.nombre.message} </span>):''
             }

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel"  name="telefono"
            { ...register('telefono', {
              required:'Ingrese un Numero de télefono',
             pattern: {
                  value: /^[0-9]+$/,
                  message: 'Solo Numeros del 0-9',
              },
              
            })}
            />
             {
              errors.telefono?(<span className='error'> {errors.telefono.message} </span>):''
             }

            <label htmlFor="correo">Email:</label>
            <input type="email"  name="correo"
            {...register('correo',{
              required:'Correo requerido',
              pattern:{
                value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:'Email invalido, Ejemplo : manuel@upa.com'
              }
            })}
            />
            {
              errors.correo?( <SpanError message={errors.correo.message} />):''
             }

            <label htmlFor="fecha">Fecha de Nacimiento:</label>
            <input type="date" name='fecha' 
              
              onBlurCapture={ ageFunction }
              {
                ...register('fecha',{
                  required:'Debe ingresar una fecha [Dia, Mes, Año]'
                })
              }
            />
            {
              errors.fecha?( <SpanError message={errors.fecha.message} />):''
             }
            <label htmlFor="edad">Edad:</label>
            <input type="number" name="edad" value={ageUser}
              readOnly
              {
                ...register('edad',{
                  required:"No hay Edad"
                })
              }
            />
            <button type="submit">Enviar</button>
        </form>
        <ToastContainer />
    </div>
  )
}
