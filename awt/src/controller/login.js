const authService = require("../services/login");
async function login(req,res) {
    try{
        const { email, password} =req.body;
        const token = await authService.login(email,password);
        res.json({token :token});
    }catch (error) {
    console.error("Login error:", error); // Log for debugging
    const status = error.status || 401;
    res.status(status).json({ message: error.message || "Invalid credentials" });
}

    
}
module.exports ={
    login
}