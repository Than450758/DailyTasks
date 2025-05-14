// Function to fetch user data with a Promise
function fetch() {
    // Simulating an API request
    const user = { id: 1, name: "Pushkar" };//if you set null it will return error

    return new Promise((resolve, reject) => {
        if (user) {
            resolve(user);
        } else {
            reject("Error fetching user data.");
        }
    });
}

// Using the Promise
fetch()
    .then((data) => {
        console.log("Processing user data:", data);
        console.log("User data processed successfully.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });