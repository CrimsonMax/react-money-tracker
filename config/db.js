const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      process.env.MONGO_URI,
      {
        useUnifiedTopology: true,
      }

    )

    console.log(`MongoDB Connected: ${con.connection.host}`.cyan.underline.bold)
  } catch (err) {
    console.log(`Error: ${err.message}`.red)
    process.exit(1)
  }
}

module.exports = connectDB