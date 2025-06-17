const userService = require("../services/user");

async function getUsers(req,res){
try{
     console.log(req.user, "usr in get user")
    const users = await userService.getUsers();
    res.json(users);
}
catch(error){
    res.status(500).json({
        message:error
    });
}
};



async function createUser(req, res) {
    try {
        const userData = req.body;
        console.log(req.user, "user in createUser");

        const newUser = await userService.createUser(userData);
        res.status(201).json(newUser);

    } catch (error) {
        console.error(" Error in createUser:", error);
        res.status(500).json({
            
            message: error.message || "Internal server error"
        });
    }
}

module.exports = {
    getUsers,
    createUser
};


