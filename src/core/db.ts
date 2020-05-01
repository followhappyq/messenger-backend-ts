import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(`${process.env.MONGOLAB_URI}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
