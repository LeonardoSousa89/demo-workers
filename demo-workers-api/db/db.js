const file    = require('../knexfile')['development']
const db      = require('knex')(file)

module.exports = db