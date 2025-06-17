
const createUser =  (req, res) => {
    
    try {
        const { name, age } = req.body;
        console.log(name, age, "name")
        console.log(req.body)
        
        if (!name || !age) {
            return res.status(400).json({ message: 'Name and age are required' });
        }

        res.status(200).json({ message: `Received data for ${name}, age ${age}` });
    }

     catch (error) {
          console.log("errorin api data", error.message)
          res.status(500).json({
            success: false,
            message: error.message
          })
     }
  // res.send("hello")
}
const updateUser =  (req, res) => {
    let userList = [
        {   

            id:1,
            age:12,
            name: "user 1"
        },
        {
            id:2,
            age:12,
            name: "user 1"        },
            {
                id:3,
            age:12,
            name: "user 1"
            }
       ]
    
    try {
            const userID=parseInt(req.params.id)
            const {name,age}=req.body;
            const user=userList.find(u => u.id===userID)
            if (user){
                user.name = name;
                user.age = age;
                res.send(userList)
            }
            else{
                res.status(404).send('user not found')
            }
        

       // res.status(200).json({ message: `Received data for ${name}, age ${age}` });
    }

     catch (error) {
          console.log("errorin api data", error.message)
          res.status(500).json({
            success: false,
            message: error.message
          })
     }
  // res.send("hello")
}

const patchUser =  (req, res) => {
    let userList = [
        {   

            id:1,
            age:12,
            name: "user 1"
        },
        {
            id:2,
            age:12,
            name: "user 1"        },
            {
                id:3,
            age:12,
            name: "user 1"
            }
       ]
    
    try {
            const userID=parseInt(req.params.id)
            const {name,age}=req.body;
            const user=userList.find(u => u.id===userID)
            if (user){
                  if (name) user.name = name;
                if (age) user.age = age;
                res.send(userList)
            }
            else{
                res.status(404).send('user not found')
            }
        

       // res.status(200).json({ message: `Received data for ${name}, age ${age}` });
    }

     catch (error) {
          console.log("errorin api data", error.message)
          res.status(500).json({
            success: false,
            message: error.message
          })
     }
    }

const getUser =  (req, res) => {
    
    try {
       let userList = [
        {   

            id:1,
            age:12,
            name: "user 1"
        },
        {
            id:2,
            age:12,
            name: "user 1"        },
            {
                id:3,
            age:12,
            name: "user 1"
            }
       ]

        res.status(200).json({ data: userList });
    }

     catch (error) {
          console.log("errorin api data", error.message)
          res.status(500).json({
            success: false,
            message: error.message
          })
     }
  // res.send("hello")
}

const deleteUser =  (req, res) => {
    let userList = [
        {   

            id:1,
            age:12,
            name: "user 1"
        },
        {
            id:2,
            age:12,
            name: "user 1"        },
            {
                id:3,
            age:12,
            name: "user 1"
            }
       ]
    
    try {
            const userID=parseInt(req.params.id)
            
            const userIndex=userList.find(u => u.id===userID)
            if (userIndex!==-1){
                userList.splice(userIndex,1)
                res.send(userList)
            }
            else{
                res.status(404).send('user not found')
            }
        

       // res.status(200).json({ message: `Received data for ${name}, age ${age}` });
    }

     catch (error) {
          console.log("errorin api data", error.message)
          res.status(500).json({
            success: false,
            message: error.message
          })
     }
    }

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    patchUser
}