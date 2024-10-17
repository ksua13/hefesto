import { Model, DataTypes } from "sequelize";
import db from "../db/connection";

class ApartamentosDetalles extends Model {}

ApartamentosDetalles.init(
  {
    id_item_zona: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "items_zonas",
        key: "id",
      },
    },
    id_apartamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "apartamentos",
        key: "id",
      },
    },
    medida: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "ApartamentoDetalle",
    tableName: "apartamentos_detalles",
    timestamps: false,
  }
);

// Producto.belongsTo(Categoria, { foreignKey: 'idcategoria', as: 'categorias' });

export default ApartamentosDetalles;
