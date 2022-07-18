const { Model, DataTypes } = require('sequelize');

class Company_Id extends Model {
	static init(sequelize) {
		super.init({
			cpf_cnpj: DataTypes.STRING,
			company_name: DataTypes.STRING,
			fantasy_name: DataTypes.STRING,
			email: DataTypes.STRING,
			comercial_phone: DataTypes.STRING,
			cell_phone: DataTypes.STRING,
			active: DataTypes.STRING,
		}, {
			sequelize
		});
	};
};

module.exports = Company_Id;