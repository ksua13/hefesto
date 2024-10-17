import { Model, DataTypes } from 'sequelize';
import db from '../db/connection';
import Categoria from './categoria'; 

class Producto extends Model {}

Producto.init({

  descripcion: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  unidadmedida: {
    type: DataTypes.STRING,
    allowNull: false
  },
  medida: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idcategoria: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'categorias', 
      key: 'id'
    }
  }
}, {
  sequelize: db, 
  modelName: 'Producto', //Nombre de la clase de modelo
  tableName: 'productos', // nombre de la tabla en BDS
  timestamps: false 
});


export default Producto;
