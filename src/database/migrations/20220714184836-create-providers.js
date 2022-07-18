'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('providers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cpf_cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      social_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fantasy_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comercial_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cell_phone: {
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
    await queryInterface.dropTable('providers');
  }
};
