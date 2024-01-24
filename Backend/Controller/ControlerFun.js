const Task = require("../Models/Taskmodel");
exports.create = async (req, res) => {
  try {
    const { title, text } = req.body;
    if (!title || !text) {
      return res.status(422).json({
        message: "Please enter information ",
      });
    }
    const newTask = Task({ title, text });
    await newTask.save();
    res.status(200).json({
      message: "Created ✅",
    });
  } catch (err) {
    res.status(500).json({ message: "something went wrong ❎" });
  }
};

exports.Edit = async (req, res) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({
      message: "not found ❎",
    });
  }
  const { title, text } = req.body;
  if (!title || !text) {
    return res.status(422).json({
      message: "inappropriate ❎",
    });
  }
  await Task.updateOne(
    { _id: id },
    {
      $set: {
        title,
        text,
      },
    },
  );
  res.status(200).json({
    message: "update ✅",
  });
};

exports.Home = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    return res.status(200).json({
      message: "All Tasks ✅",
      tasks: allTasks,
    });
  } catch (err) {
    res.status(500).json({ message: "something went wrong ❎" });
  }
};

exports.task = async (req, res) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({
      message: "not found ❎",
    });
  }
  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({
      message: "not found ❎",
    });
  }
  res.status(200).json({
    message: "find task ✅",
    task: task,
  });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({
      message: "not found ❎",
    });
  }
  await Task.deleteOne({ _id: id });
  res.status(200).json({ message: "delete ✅" });
};
