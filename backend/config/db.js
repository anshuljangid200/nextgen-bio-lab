const mongoose = require("mongoose");

let isConnected = false;

function isDatabaseConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

async function connectDB() {
  if (!isDatabaseConfigured()) {
    return false;
  }

  if (isConnected) {
    return true;
  }

  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
  console.log("MongoDB connected");
  return true;
}

module.exports = { connectDB, isDatabaseConfigured, mongoose };
