module.exports = {
  development: {
    username: 'postgres',
    password: 'yoga95',
    database: 'kenari_development',
    host: '127.0.0.1',
    dialect: 'postgres',
    seeders: {
      path: '/src/seeders',
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'kenari_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'kenari_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
