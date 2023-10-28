var express = require("express");
const passport = require("passport");
require("dotenv").config();

var router = express.Router();

const login_controller = require("../controllers/loginController");

router.get("/check", login_controller.token_check);

/* POST JWT login */
router.post("/", login_controller.jwt_login);

module.exports = router;
