const express = require('express');
const {  createUser } = require('./src/controllers/sample.controller');
const userRouter = require('./src/routes/user.route');
const app = express();
const PORT = 3000;

// ✅ Middleware to parse JSON bodies
app.use(express.json());

app.use('/user', userRouter)

// ✅ POST route
app.post('/api/data', createUser);

app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
        message: `Cannot ${req.method} ${req.originalUrl}`
    });
});


app.use((err, req, res, next) => {
    console.error(err.stack); // Optional: log to console
    res.status(500).json({ error: err.message || 'Internal Server Error' });
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`Server is running  xcxxcx on http://localhost:${PORT}`);
});
