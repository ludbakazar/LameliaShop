"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItem.belongsTo(models.Product);
      OrderItem.belongsTo(models.Order);
    }
  }
  OrderItem.init(
    {
      OrderId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
