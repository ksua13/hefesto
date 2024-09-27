import Categoria from './categoria';
import Producto from './producto';

// Define associations
Categoria.hasMany(Producto, { foreignKey: 'idcategoria', as: 'productos' });
Producto.belongsTo(Categoria, { foreignKey: 'idcategoria', as: 'categoria' });

export default function setupAssociations() {
  // This function can be called in your main server file
}
