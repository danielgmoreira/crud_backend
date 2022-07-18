const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
	static init(sequelize) {
		super.init({
			cpf: DataTypes.STRING,
			rg: DataTypes.STRING,
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			residencial_phone: DataTypes.STRING,
			cell_phone: DataTypes.STRING,
			birthday: DataTypes.DATE,
			active: DataTypes.STRING(3),
		}, {
			sequelize
		});
	};
};

module.exports = Customer;