
import {Sequelize} from 'sequelize'

const  db = new Sequelize( "prueba-manuelveliz", "root", 'MA2pass0C=D$woordF5S!rR+9**.', {
    host: "localhost",
    dialect: "mysql" 
  });

  export default  db;