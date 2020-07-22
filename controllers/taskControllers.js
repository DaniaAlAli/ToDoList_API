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

// exports.taskUpdate = (req, res) => {
//   const { taskID } = req.params;
//   const foundTask = mugs.find((task) => task.id === +taskID);

//   if (foundTask) {
//     for (const key in req.body) foundTask[key] = req.body[key];
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Task Not Found" });
//   }
// };

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
