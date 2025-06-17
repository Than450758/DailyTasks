const User = require("../models/user");

async function getUsers(){

    const users = await User.find({});
    return users;
};
   

async function createUser(userData) {
    const { name, email, password, role } = userData;

    if (!name || !email || !password) {
        throw new Error("Name, email, and password are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const newUser = new User({
        name,
        email,
        password, // password will be hashed by pre-save hook
        role: role || "user"
    });

    await newUser.save();

    return {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
    };
}



module.exports = {
   
    getUsers, createUser
};


