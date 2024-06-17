//database.js
const mysql = require("mysql2");
const db = mysql.createPool({
  host: "educalab.id",
  port: 3307,
  user: "YmnkZ50VkDnNt4y3",
  password: "7jkv9C46aM6JNCTT",
  database: "03inezlcUANdAZi6",
});

module.exports = db;
