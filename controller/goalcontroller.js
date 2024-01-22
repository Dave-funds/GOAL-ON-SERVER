const GOALS = require("../models/goalsmodel");
//find() find({title: })
const getAllGoals = async (req, res) => {

  try {
    const goals = await GOALS.find({}).sort("-createdAt");
    res.status(200).json({ numOfGoals: goals.length, goals, success: true });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};
//by id req.params
//findOne(email)

const getAGoal = async (req, res) => {
  const { goalId } = req.params;
  try {
    const goal = await GOALS.findById({ _Id: goalId });
    res.status(200).json(goal);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};
const createGoal = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(404).json({ message: "Please fill all fields" });
  }
  try {
    const goals = await GOALS.create(req.body);
    res.status(200).json({ goals });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

const updateGoal = async (req, res) => {
  const { goalId } = req.params;
  try {
    const goal = await GOALS.finByIdAndUpdate({ _id: goalId }, req.body, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

const deleteGoal = async (req, res) => {
  const { goalId } = req.params;
  try {
    await GOALS.findByIdAndDelete({ _id: goalId });
    res.status(200).json({ message: "Goal deleted successfully" });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

module.exports = { getAllGoals, getAGoal, createGoal, updateGoal, deleteGoal };
