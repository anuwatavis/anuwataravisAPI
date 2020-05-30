const mongoose = require("mongoose");
const optionsConnection = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

let urlForDatabase = process.env.SECRET_MESSAGE;
mongoose
  .connect(urlForDatabase, optionsConnection)
  .then(() => {
    console.log("mongoDB connection success");
  })
  .catch((err) => {
    if (err) throw err;
  });
