const express = require('express');
const router = express.Router();

// Import Task model
const { Task } = require('../../models');

/**
 * GET all tasks
 */
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET task by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * CREATE new task
 */
router.post('/', async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * UPDATE task
 */
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.update({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });

    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * DELETE task
 */
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
