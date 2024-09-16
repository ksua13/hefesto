import { Sequelize } from "sequelize";


const sequelize = new Sequelize('almacen', 'root', 'Tamaguchi13', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;