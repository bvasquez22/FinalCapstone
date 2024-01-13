const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

module.exports = {
  User: sequelize.define("user", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    hashedPass: DataTypes.STRING,
  }),
};
