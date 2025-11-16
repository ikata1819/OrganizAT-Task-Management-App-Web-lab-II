const express = require('express');
const taskRouter = require('./routes/tasks');
const app = express();
app.use(express.json());
const tasks = [
  {
    id: 1,
    title: "Install Node.js and npm",
    completed: false,
  },
  {
    id: 2,
    title: "Set up an Express server",
    completed: false,
  },
  {
    id: 3,
    title: "Create basic routes",
    completed: false,
  },
  
];

app.locals.tasks = tasks; 


app.use('/tasks', taskRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

