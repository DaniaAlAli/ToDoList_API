const express = require("express");

//controllers
const {
  taskCreate,
  taskList,
  taskUpdate,
  taskDelete,
} = require("../controllers/taskControllers");

const router = express.Router();

// Mug List
router.get("/", taskList);

// Mug create
router.post("/", taskCreate);

// Mug update
// router.put("/:taskID", mugUpdate);

// Mug Delete
router.delete("/:taskID", taskDelete);

module.exports = router;
