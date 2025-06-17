const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerProduct = require('./src/routes/router');
const routerCategory = require('./src/routes/categoryRoute');
dotenv.config();
const app = express();

const PORT=process.env.PORT;
const MONGOURL = process.env.MONGO_URL;



app.use(express.json());
app.use('/',routerProduct);
app.use('/',routerCategory);
mongoose.connect(MONGOURL)
.then(() =>{
    console.log("database connect successfully")
    app.listen(PORT,() => {
        console.log('Sever is running on port 8000');

    });
})
.catch((error) => console.log('database error',error));
