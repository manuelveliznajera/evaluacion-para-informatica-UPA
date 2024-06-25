
import {Sequelize} from 'sequelize'

const  db = new Sequelize( "evaluacion-ManuelVeliz", "root", '2301924671712', {
    host: "localhost",
    dialect: "mysql" 
  });

  export default  db;