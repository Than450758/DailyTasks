// Function to fetch user data with Async/Await
async function fetch() {
    // Simulating an API request
    const user = { id: 1, name: "Pushkar" };

    return new Promise((resolve) => {
        resolve(user);
    });
}

// Function to process user data using Async/Await
async function process() {
    try {
        const data = await fetch();
        console.log("Processing user data:", data);
        console.log("User data processed successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

// Using Async/Await
process();