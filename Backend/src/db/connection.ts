import { Sequelize } from "sequelize";


const db = new Sequelize('simulador', 'postgres', 'Tamaguchi13', {
    host: 'localhost',
    dialect: 'postgres'
  });

  

  export default db;