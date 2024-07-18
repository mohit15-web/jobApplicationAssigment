const express = require("express");
const router = express.Router();
const jobController = require("../controller/job");

router.post("/create", jobController.creatJob);

router.get("/getJob", jobController.getAllJobs);

router.post("/deleteJobs", jobController.deleteJobs);

router.post("/updateJob", jobController.updateJob);

module.exports = router;
