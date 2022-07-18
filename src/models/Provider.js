const { Model, DataTypes } = require('sequelize');

class Provider extends Model {
	static init(sequelize) {
		super.init({
			cpf_cnpj: DataTypes.STRING,
			social_name: DataTypes.STRING,
			fantasy_name: DataTypes.STRING,
			email: DataTypes.STRING,
			comercial_phone: DataTypes.STRING,
			cell_phone: DataTypes.STRING,
			active: DataTypes.STRING(3),
		}, {
			sequelize
		});
	};
};

module.exports = Provider;