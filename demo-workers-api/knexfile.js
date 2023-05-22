const dotenv=require('dotenv') 
dotenv.config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'worker_admin',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: process.env.CLIENT,
    connection: {
      host:      process.env.HOST,
      database:  process.env.DATABASE,
      user:      process.env.USER,
      password:  process.env.PASSWORD,
      ssl:       { rejectUnauthorized: false }
    }
  }

};
