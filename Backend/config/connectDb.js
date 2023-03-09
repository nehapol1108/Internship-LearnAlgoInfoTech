const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://nehapol40:neha1234@cluster0.1gnsmf7.mongodb.net/internship-task?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;