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
  modelName: 'Producto', 
  tableName: 'productos', 
  timestamps: false 
});

Producto.belongsTo(Categoria, { foreignKey: 'idcategoria', as: 'categorias' });

export default Producto;

//NUEVO
// import { Model, DataTypes } from 'sequelize';
// import db from '../db/connection';
// import Categoria from './categoria'; // Import Categoria correctly

// class Producto extends Model {}

// Producto.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   descripcion: {
//     type: DataTypes.STRING,
//     allowNull: false 
//   },
//   imagen: {
//     type: DataTypes.STRING,
//     allowNull: true 
//   },
//   precio: {
//     type: DataTypes.DOUBLE,
//     allowNull: false
//   },
//   unidadMedida: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   medida: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   idCategoria: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'categorias', 
//       key: 'id'
//     }
//   }
// }, {
//   sequelize: db, 
//   modelName: 'Producto', 
//   tableName: 'productos', 
//   timestamps: false 
// });

// // Define association after both models are declared
// // Producto.belongsTo(Categoria, { foreignKey: 'idCategoria', as: 'categoria' });

// export default Producto;
