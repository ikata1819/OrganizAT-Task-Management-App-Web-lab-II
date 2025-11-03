const express = require("express");
const app = express();
const port = 3000;
const tasks = [
  {
    id: 1,
    title: "Install Node.js and npm",
    completed: false,
    priority: "Low",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Set up an Express server",
    completed: false,
    priority: "Low",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Create basic routes",
    completed: false,
    priority: "Medium",
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Implement a basic GET tasks route",
    completed: false,
    priority: "Medium",
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Test the route using Postman",
    completed: false,
    priority: "High",
    createdAt: new Date(),
  },
];

const health = [
  { "status": "healthy", "uptime": process.uptime()}
];


app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});
app.get("/tasks", (req, res) => {
  res.json(tasks);
});
app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id); 
  const task = tasks.find(t => t.id === id); 
  if (task) {
    res.json(task); 
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

app.get("/health", (req, res) => {
  res.json(health);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
