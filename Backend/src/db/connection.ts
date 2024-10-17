import { Sequelize } from "sequelize";


const db = new Sequelize('simulador', 'postgres', 'Tamaguchi13', {
    host: 'localhost',
    dialect: 'postgres'
  });
//Esta no la estoy usando jsjs
// const dbpg = new Sequelize('queryx_seven', 'mysql', 'KcZnMxCUXWmmpBLS', {
//     host: '10.1.0.65:3306',
//     dialect: 'mysql'
//   });




  export default db;