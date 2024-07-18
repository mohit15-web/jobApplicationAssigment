const Job = require("../models/job");

const creatJob = async (req, res) => {
  console.log(req.body);
  try {
    let newlyCreatedJob = await Job.create(req.body);
    console.log(newlyCreatedJob);
    res.json({
      success: true,
      message: "Job created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const updateJob = async (req, res) => {
  console.log(req.body);
  data = req.body.jobTitle
  try {
    let job = await Job.findByIdAndUpdate(req.body.id , {$set: {jobTitle : data}});
    console.log(job);
    res.json({
        success: true,
        message: "Job updated successfully",
      });
  } catch (error) {
    res.json({
      success: false,
      message: "Job not updated",
    });
  }
};

const deleteJobs = async (req, res) => {
  console.log(req.body);
  try {
    let job = await Job.findByIdAndDelete(req.body.id);
    console.log(job);
    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "job not deleted",
    });
  }
};

const getAllJobs = async (req, res) => {
  try {
    let allJobs = await Job.find();
    console.log(allJobs);
    res.json({
      success: true,
      message: "Jobs fetched successfully",
      data: allJobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const jobController = {
  creatJob,
  updateJob,
  getAllJobs,
  deleteJobs,
};

module.exports = jobController;
