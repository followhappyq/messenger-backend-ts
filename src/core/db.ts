import mongoose from "mongoose"

mongoose.connect(
  "mongodb+srv://happyq:4ea250e09802@cluster0-3isii.mongodb.net/chat?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
)
