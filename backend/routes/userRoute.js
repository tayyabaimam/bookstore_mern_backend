const express= require("express");

const {
  handleUserSignup,
  handleUserLogin
} = require("../controllers/user.js");

const router = express.Router();

//saving new User into database
router.post("/", handleUserSignup);

//route for fetching all Users
router.post("/login", handleUserLogin);

module.exports = router;
