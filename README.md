### Naruto API

# How to use

Install the dependecies

```
  $ yarn
  $ docker run --name naruto-api -e POSTGRES_PASSWORD=anyPassword -p 5432:5432 -d postgres
```

Create a sequelize config file

```
config/database.js

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'anyPassword',
  database: 'naruto-api',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

```
