import { Model, DataTypes } from "sequelize";
import db from "../db/connection";
import ItemsZona from "./itemsZona";

class Zonas extends Model {}

Zonas.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Zonas",
    tableName: "zonas",
    timestamps: false,
  }
);


export default Zonas;
