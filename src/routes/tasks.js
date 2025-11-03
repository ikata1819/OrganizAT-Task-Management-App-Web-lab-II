const express = require("express");
const router = express.Router();


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

router.get("/", (req, res) => {
  res.json(tasks);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

module.exports = router;
