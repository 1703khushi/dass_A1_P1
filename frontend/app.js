const express = require("express");
const app = express();
app.use(express.json())
app.listen(5000,()=>{
  console.log("hello im on!!!")
})

app.post("/post", async(req,res)=>{
  console.log(req.body);
})