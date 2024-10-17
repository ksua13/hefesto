import { Model, DataTypes } from 'sequelize';
import db from '../db/connection';

class Apartamentos extends Model {}

Apartamentos.init({

    nombre: {
      type: DataTypes.STRING,
      allowNull: false 
    }
}, {
  sequelize: db, 
  modelName: 'Apartamentos', 
  tableName: 'apartamentos', 
  timestamps: false 
});

// Producto.belongsTo(Categoria, { foreignKey: 'idcategoria', as: 'categorias' });

export default Apartamentos;

