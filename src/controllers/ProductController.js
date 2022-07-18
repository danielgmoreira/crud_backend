const Product = require('../models/Product');

module.exports = {
	async index(req, res) {
		try {
			const products = await Product.findAll();
			return res.json(products);
		} catch (err) {
			return res.json(400).send({
				message: 'Ocorreu um erro ao carregar os produtos. Por favor, tente novamente.',
				err: err.message,
			});
		}
	},

	async store(req, res) {
		const { description, price, unity, quantity, brand, locality, active } = req.body;

		try {
			const product = await Product.create({
				description, price, unity, quantity, brand, locality, active
			});
			return res.json(product);
		} catch (err) {
			return res.status(400).send({
				message: 'Ocorreu um erro ao cadastrar o produto. Por favor, tente novamente',
				err: message.err
			});
		}
	},

	async update(req, res) {
		const { description, price, unity, quantity, brand, locality, active } = req.body;
		const { id } = req.params;

		try {
			const product = await Product.update({
				description, price, unity, quantity, brand, locality, active,
			}, {
				where: { id }
			}
			);
			return res.json(product);
		} catch (err) {
			return res.status(400).send({
				message: 'Ocorreu um erro ao atualizar o produto. Por favor, tente novamente',
				err: err.message,
			});
		}
	},

	async getById(req, res) {
		const { id } = req.params;

		try {
			const product = await Product.findByPk(id);
			return res.json(product);
		} catch (err) {
			return res.status(400).send({
				message: 'Ocorreu um erro ao atualizar o produto. Por favor, tente novamente',
				err: err.message,
			});
		}
	},

	async delete(req, res) {
		const { id } = req.params

		Product.destroy({
			where: {
				id
			}
		})
	}
}