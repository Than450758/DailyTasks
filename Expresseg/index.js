// save this as server.js
const express = require('express');
const path = require('path');
// const port= process.env.PORT || 3000;
const app = express();
const port = 3000
/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','Home.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'public','about.html'));
});
*/



let posts=[
    
        {id:1,title:'Post one'},
        
        {id:2,title:'Post two'},
        
        {id:3,title:'Post three'},

    
];
//get all posts
app.get('/api/posts',(req,res)=>{
    res.post(posts);
});

//get all  single posts
/*app.get('./api/posts/:id',(req,res)=>{
    console.log(req.params);
    res.json(posts);
});*/

app.listen(port, () => 
  console.log(`Server is running on port ${port}`));

