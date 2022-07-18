'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
      unity: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      locality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      active: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
