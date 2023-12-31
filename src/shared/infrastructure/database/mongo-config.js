const mongoose = require("mongoose");

const database = async (connection, host, user, password, db) => {
  try {
    const URI = `${connection}://${host}`;
    await mongoose.connect(URI, {
      user,
      pass: password,
      dbName: db,
    });
    console.log("Successful connection to MongoAtlas Database");
  } catch (error) {
    console.log("Failed connection to MongoAtlas Database");
  }
};

module.exports = database;
