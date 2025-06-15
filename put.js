const express = require('express');
const router = express.Router();
const Task = require('./taskModel'); 


// PUT /tasks/:id - update a task by ID
router.put('/tasks/:id', async (req, res) => {
  try {
    const { title, completed } = req.body;

    // Find the task by ID and update it
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true } // return the updated task
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

module.exports = router;
