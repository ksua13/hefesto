import Apartamentos from './apartamento';
import ApartamentosDetalles from './apartamentoDetalle';
import Categoria from './categoria';
import ItemsZonas from './itemsZona';
import Producto from './producto';
import Zonas from './zona';

// Define associations

// Relacion Categorias - Productos
Categoria.hasMany(Producto, { foreignKey: 'idcategoria', as: 'productos' });
Producto.belongsTo(Categoria, { foreignKey: 'idcategoria', as: 'categoria' });

// Relaciones Zonas - ItemsZonas
Zonas.hasMany(ItemsZonas, { foreignKey: 'id_zona', as: 'items_zonas' });
ItemsZonas.belongsTo(Zonas, { foreignKey: 'id_zona', as: 'zonas' });

// Relacion Apartamentos - items_zonas -> apartamentos_detalles
Apartamentos.belongsToMany(ItemsZonas, { through: ApartamentosDetalles, foreignKey: 'id_apartamento', otherKey: 'id_item_zona', as: 'itemsZonas' });
ItemsZonas.belongsToMany(Apartamentos, { through: ApartamentosDetalles, foreignKey: 'id_item_zona', otherKey: 'id_apartamento', as: 'apartamentos' });

ApartamentosDetalles.belongsTo(Apartamentos, { foreignKey: 'id_apartamento', as: 'apartamento' });
ApartamentosDetalles.belongsTo(ItemsZonas, { foreignKey: 'id_item_zona', as: 'itemZona' });



export default function setupAssociations() {
  
}
