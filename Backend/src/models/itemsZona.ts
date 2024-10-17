import { Model, DataTypes } from 'sequelize';
import db from '../db/connection';

class ItemsZonas extends Model {}

ItemsZonas.init({

  descripcion: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  unidadmedida: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_zona: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_zona', 
    references: {
      model: 'zonas',
      key: 'id'
    }
  }
}, {
  sequelize: db, 
  modelName: 'ItemsZonas', 
  tableName: 'items_zonas', 
  timestamps: false 
});


export default ItemsZonas;

