const { Model, DataTypes } = require('sequelize');

class Address extends Model {
	static init(sequelize) {
		super.init({
			zipcode: DataTypes.STRING,
			street: DataTypes.STRING,
			number: DataTypes.STRING,
			state: DataTypes.STRING,
			city: DataTypes.STRING,
		}, {
			sequelize
		});
	};
};

module.exports = Address;