'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product, {
        foreignKey: 'productId'
      })

      this.belongsTo(models.user, {
        foreignKey: 'createdBy'
      })
    }
  }
  offer.init({
    productId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    }
  }, {
    sequelize,
    modelName: 'offer',
    tableName: 'offers'
  });
  return offer;
};