const express = require("express");

//controllers
const {
  taskCreate,
  taskList,
  taskUpdate,
  taskDelete,
} = require("../controllers/taskControllers");

const router = express.Router();

// Task List
router.get("/", taskList);

// Task create
router.post("/", taskCreate);

//Task update
router.put("/:taskID", taskUpdate);

// Task Delete
router.delete("/:taskID", taskDelete);

module.exports = router;
