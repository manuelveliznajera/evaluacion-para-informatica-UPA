import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/NavBar'
import { convertAge } from '../utils/convertAge';
import moment from 'moment';

export const ReportePage = () => {
  
  const [users, setUsers] = useState(new Array())
  const [usersall, setUsersAll] = useState(new Array())




  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/usuarios/reporte/todos');
      const {data} = await response.json();
      setUsersAll(data);
      setUsers(data)
    } catch (error) {
      toast.error("Error de Servirdor: "+ error ,{
        position: "top-right"
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const onUserAyer =async()=>{
    const yesterday = moment().subtract(1, 'day').startOf('day');
    yesterday.format('DD-MM-YYYY');
    const usersAyer = await usersall.filter( user =>{
      
      const itemDate = moment(user.creacion).startOf('day');
      return itemDate.isSame(yesterday, 'day');
    });
    setUsers( usersAyer);
  }
  const onUserTodos = ()=>{
    fetchUsers();
  }


  const onUserHoy =()=>{
    const today = moment().startOf('day');
    today.format('DD-MM-YYYY');
   
    const userHoy = usersall.filter( user =>{
      const itemDate = moment(user.creacion).startOf('day');
    
    return itemDate.isSame(today, 'day');

    })
    setUsers( userHoy );
  }

  return (
    <>
    <Navbar url ={'Registrar'} />

    <div className='container-report'>
        <button type="button" onClick={onUserTodos}>Todos los usuarios</button>
        <button type="button" onClick={onUserAyer}>Registrados Ayer</button>
        <button type="button" onClick={onUserHoy}>Registrados Hoy</button>
    </div>
    <div>
      <table className='table-container'>
        <thead> 
          <tr>
            <td>ID</td>
            <td>NOMBRE</td>
            <td>TELEFONO</td>
            <td>EDAD</td>
            <td>FECHA DE CREACION</td>
            <td>ACCIONES</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user)=>(
              <tr key={user.id} className='tr-user'>
                <td>{user.id}</td>
                <td>{  user.nombre.toUpperCase()}</td>
                <td>{ user.telefono }</td>
                <td>{ convertAge(user.fecha)}</td>
                <td> { moment(user.creacion).format('DD-MM-YYYY') }</td>
                <td>
                    <div className='btn-table'>
                      <button>editar</button>
                      <button>eliminar</button>
                    </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    <ToastContainer />

    </>
  )
}
