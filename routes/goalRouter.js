const express = require("express");
const router = express.Router();
const {
  getAllGoals,
  getAGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalcontroller");

router.get("/", getAllGoals);
router.post("/", createGoal);

// router.get("/api/goals/:goalId", getAGoal);
// router.patch("/api/goals/:goalId", updateGoal);
// router.delete("/api/goals/:goalId", deleteGoal);

router.route('/:goalsId').get(getAGoal).patch(updateGoal).delete(deleteGoal)

module.exports = router;
