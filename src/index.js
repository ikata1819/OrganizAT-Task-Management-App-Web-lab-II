require('dotenv').config();

console.log('Environment variables loaded:');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PASSWORD exists:', !!process.env.DB_PASSWORD); // Don't log actual password
const express = require('express');
const taskRouter = require('./routes/tasks');
const app = express();
app.use(express.json());

app.use('/tasks', taskRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

