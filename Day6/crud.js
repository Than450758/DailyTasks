const students = [
    {   id:1,
        name: "stude A",
        age: 12,
        grade: 7
    },
      { id:2,
        name: "stude B",
        age: 5,
        grade: 7
    },
      {id:3,
        name: "stude C",
        age: 5,
        grade: 7

    }]
    /* students.forEach(user => {
  if (user.id === 1) {
    delete user.id; // Remove 'isActive' property
  }
});*/

// console.log(students);
// const filteredUsers =students.filter(user => user.id !== 1); 

// console.log(filteredUsers);
//delete function

    const delFun = (id) => {
    const filteredUsers =students.filter(user => user.id !== id); 
    return filteredUsers
}

let resultD = delFun(2) 
// console.log(resultD);

//update function

const updateFun = (id, payload) => {
    const updated = students.map(stu => {
        console.log(stu)
        console.log(id, stu.id)
        if (stu.id ===  id ) return payload;
        return stu
    })
    return updated;;
}

const resultUpdate = updateFun(2 , {name : "hello"})
console.log(resultUpdate)


//create finction

const createFun = (payload) => {
    return  [...students, payload]

}
const nn=createFun({ id: 4, name: 'stude D', age: 5, grade: 7 })
console.log(nn)

////////////////////////////////////
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
//create
function createUser(id, name) {
  users.push({ id, name });
}
createUser(3, 'Charlie');
console.log(users);
//read
function getUser(id) {
  return users.find(user => user.id === id);
}

console.log(getUser(2)); // { id: 2, name: 'Bob' }
//update
function updateUser(id, newName) {
  const user = users.find(user => user.id === id);
  if (user) {
    user.name = newName;
  }
}

updateUser(1, 'Alicia');
console.log(users);
//delete
function deleteUser(id) {
  users = users.filter(user => user.id !== id);
}
deleteUser(2);
console.log(users);
