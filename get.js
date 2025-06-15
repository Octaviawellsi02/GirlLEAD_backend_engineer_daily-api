const express = require('express');
const router = express.Router();
const Task = require('./taskModel'); // make sure the model file is correct

// GET all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // get all tasks from MongoDB
    res.status(200).json(tasks); // send the list as JSON
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

module.exports = router;
