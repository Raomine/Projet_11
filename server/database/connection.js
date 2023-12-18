const mongoose = require("mongoose");
const databaseUrl =
  "mongodb+srv://zarourhicham:pFC9KRcSgJ32BMCW@cluster0.4xc6qso.mongodb.net/";
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
