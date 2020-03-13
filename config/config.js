module.exports = {
  "development": {
    "username": "heroku",
    "password": "pwd12345",
    "database": "heroku-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "port" : 5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "heroku",
    "password": "pwd12345",
    "database": "heroku-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "port" : 5432
  }
}
