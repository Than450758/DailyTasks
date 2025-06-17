const express = require('express');
const signupRoute = require("./routes/signup");
const cors =require('cors');
const app = express();
const userRoute = require('./routes/user');
const loginRoute =require("./routes/login");
const createAdminAccount = require("./scripts/admin")
const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(cors());

// For parsing application/json

createAdminAccount();


app.use(express.urlencoded({ extended: true }));

app.use("/user",signupRoute);
app.use("/auth",loginRoute);
app.use("/api",userRoute);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})