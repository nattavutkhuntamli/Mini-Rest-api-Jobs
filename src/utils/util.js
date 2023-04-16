const util = require('util')
const {connection} = require('../config/db')

const query = util.promisify(connection.query).bind(connection)

module.exports = {query}