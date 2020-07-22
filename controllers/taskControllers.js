const slugify = require("slugify");

//Data
let tasks = require("../tasks");

exports.taskList = (req, res) => {
  res.json(tasks);
};

exports.taskCreate = (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newTask = { id, slug, ...req.body };
  tasks.push(newTask);

  res.status(201).json(newTask);
};

exports.taskUpdate = (req, res) => {
  const { taskID } = req.params;
  const task = tasks.find((task) => task.id === +taskID);
  task.click = !task.click;
  res.status(204).end();
};

exports.taskDelete = (req, res) => {
  const { taskID } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskID);

  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +taskID);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task Not Found" });
  }
};
