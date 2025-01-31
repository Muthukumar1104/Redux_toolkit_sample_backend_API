require("dotenv").config();
const mongoose = require("mongoose");

let connection;

const connectDB = async () => {
  if (!connection) {
    try {
      connection = await mongoose.connect(
        "mongodb+srv://dbuser:db_passw0rd@cluster0.fjytmsi.mongodb.net/customer",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log(`MongoDB connected:${mongoose.connection.host}`);
    } catch (err) {
      console.log(`MongoDB connection failed : ${err}`);
      process.exit(1);
    }
  }
  return connection;
};

module.exports = connectDB;
