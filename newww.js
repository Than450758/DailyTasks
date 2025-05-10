function logMessages(level, ...messages) {
  messages.forEach(msg => console.log(`[${level}] ${msg}`));
}

logMessages("INFO", "Server started", "DB connected", "Listening on port 3000");