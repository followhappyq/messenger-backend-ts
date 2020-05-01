import mongoose from "mongoose"

mongoose.connect(
  "mongodb://happyq:487zxcq347r@ds121996.mlab.com:21996/heroku_wfc7b03x",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
)

/* mongodb+srv://happyq:4ea250e09802@cluster0-3isii.mongodb.net/chat?retryWrites=true&w=majority */

/* mongodb://happyq:487zxcq347r@ds121996.mlab.com:21996/chat */
