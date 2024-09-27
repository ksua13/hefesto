// import { Model, DataTypes } from 'sequelize';
// import db from '../db/connection';
// import Producto from './producto';

// class Categoria extends Model {}

// Categoria.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   nombre: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize: db, 
//   modelName: 'Categoria', 
//   tableName: 'categorias', 
//   timestamps: false 
// });

// Categoria.hasMany(Producto, { foreignKey: 'id_categoria', as: 'productos' });

// export default Categoria;

//NUEVOO

import { Model, DataTypes } from 'sequelize';
import db from '../db/connection';
import Producto from './producto'; // Import Producto correctly

class Categoria extends Model {}

Categoria.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db, // Use the sequelize instance from db connection
  modelName: 'Categoria', // Model name should match singular form of the table
  tableName: 'categorias', // Define the table name explicitly
  timestamps: false // Disable timestamps if not needed
});

// Define association after both models are declared
// Categoria.hasMany(Producto, { foreignKey: 'idcategoria', as: 'productos' });

export default Categoria;



