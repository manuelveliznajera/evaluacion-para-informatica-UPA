import { PrismaClient } from "@prisma/client";
import express from "express";
import { object, string, number, date } from 'yup';
import moment from 'moment';
moment().format();

const router = express.Router();
let prisma = new PrismaClient();

router.get('/reporte', async (req, res) => {
  
  try {
    
} catch (error) {
}

});

let userSchema = object({
  
  nombre: string().required(),
  edad: number().required().integer(),
  correo: string().email(),
  telefono: string().required().min(8),
  fecha: date().required(),
});


router.post('/usuarios/registrar', async (req, res) => {
        const { nombre, telefono, correo,fecha,edad } = await userSchema.validate( req.body);
        const user = await prisma.usuario.findUnique({
          where: { 
            correo
          },
          select:{
            correo:true,
          },
        });
        const creacion = moment();
        if (user) {
          res.status(202).json({ mensaje: ` Email: ${correo} duplicado!`})
          return;
        }

        if (edad<18) {
            res.status(201).json({ mensaje: ` Usuario menor de edad, no puede seguir `})
            return;
          }

     const data = {nombre,fecha,telefono, correo, creacion};
     console.log(data)
      try {
        const user = await prisma.usuario.create({
                    data: data
                    });
      res.status(200).json({mensaje: ` Usuario: ${user.nombre} creado Exitosamente! `})
      } catch (error) {
        res.status(500).json({mensaje: error});
      }
  
});

router.get('/usuarios/reporte/:query', async(req,res)=>{
      console.log("no viene"+req.params.query)
      const query = await req.params.query;
      let data =[];

      console.log(typeof(query))

      const hoy = moment();
      if ( query =='todos') {
          data = await prisma.usuario.findMany({
            include: {
              EstadoUsuario :{
                select:{
                  titulo:true,
                }
              }
                }
          });
         return res.status(200).json({
          data
         });

      } if(query=='hoy') {
        return res.status(200).json({
          mensaje: "hoy ..."
         });
      }if(query == 'ayer' ){
        const ayer = hoy.subtract(1, 'day');
        data = await prisma.usuario.findMany({
          where:{
            creacion: hoy
          },
          select:{
            nombre:true
          }
        })
        return res.status(200).json({
          mensaje: data
         });
      }
        return res.status(404).json({
            mensaje : 'No existe con estos argumentos'
          });

      
})

export default router;
