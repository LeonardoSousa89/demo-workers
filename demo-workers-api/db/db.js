const file    = require('../knexfile')['production']
const db      = require('knex')(file)

module.exports = db