const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./src/routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.use(express.json());
app.use('/', userRouter);
//products  , name , description, qty, price 
//unique 

mongoose.connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("DB connection error:", error));

//mongoose.connect("mongodb://127.0.0.1:27017/Demodb")
//mongoose.connect("mongodb://localhost:27017/Demodb")
//mongodb://localhost:27017/
/*const userSchema = new mongoose.Schema({
    name:String,
    roll : Number
})
const UserModel = mongoose.model("stu",userSchema)
app.get("/getUsers", async (req, res) => {
  try {
    const userData = await UserModel.find(); // Returns an array
    console.log("User Data:", userData); // Debug log
    res.json(userData); // ✅ This is safe
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(3000,() =>{
    console.log("server is running")
})*/

