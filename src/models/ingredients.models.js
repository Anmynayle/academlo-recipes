const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Types = require("./types.models");
const Ingredients = db.define(
  "Ingredients",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    typeId: {
      type: DataTypes.INTEGER,
      field: "type_id",
      reference: {
        key: "id",
        model: Types,
      },
    },
    urlImg: {
      type: DataTypes.INTEGER,
      field: "url_img",
      validate: {
        isUrl: true,
      },
    },
  },
  { timestamps: false }
);

module.exports = Ingredients;
