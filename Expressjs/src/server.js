const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); // json parse
app.use(express.urlencoded({ extended: true }));  // form data parse

app.get('/', (req,res)=> {
  res.send("hello")
})

app.get('/test', (req, res) => {

    // const { name, password } = req.body // { name: 'Than Than Su ddsd', password: '12345678' }
    // const token = req.headers["token"]

    
    res.json ({data: {
    "test": "test",
    //  name: name,
    //  token,
    //  password
  }})
})

app.get('/products', (req, res) => {
   
    console.log("run products")
    
    res.json ({data: {
    "product": "product list"
  }})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
