// Callback function to process user data
function process(data, callback) {
    console.log("Processing user data:", data);
    callback();
}

// Function to fetch user data with a callback
function fetch(callback) {
    // Simulating an API request
    const user = { id: 1, name: "Pushkar" };
    callback(user);
}

// Using the callback
fetch((data) => {
    process(data, () => {
        console.log("User data processed successfully.");
    });
});