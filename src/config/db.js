const mysql = require('mysql')
const dotenv  = require('dotenv').config()

const address = {
    host:"localhost",
    user:"root",
    password: "",
    database: process.env.DATABASE,
    charset: "utf8",
  };
const connection = mysql.createConnection(address)
module.exports = {connection}