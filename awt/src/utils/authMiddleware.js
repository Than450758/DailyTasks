const jwt =require("jsonwebtoken");
const { secretKey } = require("../configuration/jwtConfig");


function authenticateToken(req, res,next){
    const authHeader =req.header("Authorization");
    if(!authHeader){
        return res.status(401).json({message:"Unauthorized :Missing token"});
    }
    const [bearer,token]=authHeader.split(" ");

    console.log(secretKey, "secretKey")
    console.log(token, 'token')

    if(bearer !== "Bearer" || !token){
        return res.status(401).json({message:"Unauthorized ;Invalid token format"});
    }
   
    jwt.verify(token,secretKey,(err,user)=>{
        if( err ){
            console.log(err, "error" )
            return res.status(403).json({message:"forbidden : Invalid Token"})
        }
        console.log(user , "users")
        req.user =user;
        next();
    })
}
module.exports ={authenticateToken};