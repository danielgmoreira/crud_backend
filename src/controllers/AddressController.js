const Address = require('../models/Address');
const Customer = require('../models/Customer');

module.exports = {
  async store(req, res) {
    const { customer_id } = req.params;
    const { zipcode, street, number, state, city } = req.body;

    try {
      const customer = await Customer.findByPk(customer_id);

      if (!customer) {
        return res.status(400).json({ error: 'Customer not found' })
      }

      const address = await Address.create({
        zipcode,
        street,
        number,
        state,
        city,
        customer_id,
      });

      return res.json(address)

    } catch (err) {
      return err
    };

  },
};