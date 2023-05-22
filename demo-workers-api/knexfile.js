
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'worker_admin',
      user:     'admin',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'pg',
    connection: {
      host:     'ec2-44-193-150-214.compute-1.amazonaws.com',
      database: 'd6kse4d3jmav11',
      user:     'ptjprhygkueelm',
      password: 'ea8c6ab8e68ce46a8be94b25d2dd533d84dc31ec237e89763493c87439f9eed1',
      ssl:       { rejectUnauthorized: false }
    }
  }

};
