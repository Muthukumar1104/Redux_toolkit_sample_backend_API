const express = require("express");
const router = express.Router();
const { validationResult, check } = require("express-validator");
const { requestHandler } = require("../utils/Common");
const Authservice = require("../controller/authController");

router.post(
  "/signup",
  [
    check("username")
      .isString()
      .notEmpty()
      .withMessage("User Name is required"),
    check("email").isEmail().notEmpty().withMessage("Email is required"),
    check("newpassword")
      .isNumeric()
      .notEmpty()
      .withMessage("New Password is required"),
    check("confirmpassword")
      .isNumeric()
      .notEmpty()
      .withMessage("Confirm Password is required"),
  ],
  (req, res) => {
    const errors = validationResult(res).array();
    if (errors.length) {
      requestHandler(errors, true, (err_message) => {
        return res.status(404).json(err_message);
      });
    } else {
      Authservice.signup(req, res);
    }
  }
);

router.post(
  "/login",
  [
    check("email").isEmail().notEmpty().withMessage("Email is required"),
    check("password")
      .isNumeric()
      .notEmpty()
      .withMessage("Password is required"),
  ],
  (req, res) => {
    const errors = validationResult(res).array();
    if (errors.length) {
      requestHandler(errors, true, (err_message) => {
        return res.status(404).json(err_message);
      });
    } else {
      // userSignup
    }
  }
);

module.exports = router;
