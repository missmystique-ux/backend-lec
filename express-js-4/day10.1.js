require('dotenv').config(); // Load .env file

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

app.get('/', (req, res) => {
    res.send('Environment Variables in Express.js');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log('Database Host:', process.env.DB_HOST);
console.log('Environment Mode:', process.env.ENVIRONMENT);

const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
if (ENVIRONMENT === 'development') {
    console.log('Debug mode enabled');
} else {
    console.log('Production mode active');
}