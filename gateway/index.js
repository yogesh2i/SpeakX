const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const userRouter = require("./question");


app.use(express.json());
app.use(cors())

app.use("/speakx", userRouter);


app.listen(PORT, () => {
  console.log(`server at ${PORT}`);
});
