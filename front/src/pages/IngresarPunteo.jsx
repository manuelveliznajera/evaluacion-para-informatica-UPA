import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/NavBar';
import { SpanError } from '../components/SpanError';


export const IngresarPunteo = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handSubmit =()=>{
        console.log("submit")
    }
  return (
    <div>
        <Navbar url={'Reportes'} />
      <form onSubmit={ handleSubmit( handSubmit )} >
            <h2>Agregar Punteo</h2>
            <label htmlFor="correo">Email:</label>
            <input type="text"  name="correo"
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

            <label htmlFor="punteo">Punteo:</label>
            <input type="number"  name="punteo"
            { ...register('punteo',{
                max:{
                    value:100,
                    message:"El numero Máximo es de 100, Vuelva a intentar"
                },
                min:{
                    value:1,
                    message:"El numero Minimo es de 1, Vuelva a intentar"
                }
            })}
            />
             {
              errors.punteo?(<span className='error'> {errors.punteo.message} </span>):''
             }

            <button type="submit">Enviar</button>
        </form>
        <ToastContainer />
    </div>
  )
}
