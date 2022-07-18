const { Model, DataTypes } = require('sequelize');

class Product extends Model {
	static init(sequelize) {
		super.init({
			description: DataTypes.STRING,
			price: DataTypes.DECIMAL(6, 2),
			unity: DataTypes.STRING(2),
			quantity: DataTypes.INTEGER,
			brand: DataTypes.STRING,
			locality: DataTypes.STRING,
			active: DataTypes.STRING(3),
		}, {
			sequelize // Conectando com o DB
		});
	};
};

module.exports = Product;