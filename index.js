require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port =  process.env.PORT || 80;

const callRoute = require("./Router");

const app = express();
app.use(express.json())
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("successfully deployed");
  });


app.get('/', (req,res)=>{
  res.send('my api is ready...')
})
app.use("/", callRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

