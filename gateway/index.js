const express = require("express");
const app = express();
const PORT = 5001;
const cors = require('cors');
const userRouter = require("./question");


app.use(express.json());
app.use(cors())

app.use("/speakx", userRouter);


app.listen(PORT, () => {
  console.log(`server at ${PORT}`);
});
