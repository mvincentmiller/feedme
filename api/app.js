// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('queue_database', 'queue', 'queue', {
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 9,
//     min: 0,
//     idle: 10000
//   }
// });

// sequelize.authenticate().then(() => {
//   console.log("Success!");
// }).catch((err) => {
//   console.log(err);
// });

const http = require("http");
const { postgraphile } = require("postgraphile");

http
  .createServer(
    postgraphile(
      process.env.DATABASE_URL || "postgres://queue:queue@localhost:5432/queue_database",
      "public",
      {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
      }
    )
  )
  .listen(process.env.PORT || 3000);