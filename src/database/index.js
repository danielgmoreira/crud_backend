const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Company_Id = require('../models/Company_Id')
const Product = require('../models/Product')
const Customer = require('../models/Customer')
const Provider = require('../models/Provider')
const Address = require('../models/Address')

const connection = new Sequelize(dbConfig);

Company_Id.init(connection)
Product.init(connection)
Customer.init(connection)
Provider.init(connection)
Address.init(connection)

module.exports = connection;