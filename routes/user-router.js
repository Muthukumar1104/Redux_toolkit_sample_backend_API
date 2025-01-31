const express = require("express");
const router = express.Router();
const { validationResult, check } = require("express-validator");
const customerservice = require("../controller/customerController");
const { requestHandler } = require("../utils/Common");

router.post(
  "/add",
  [
    check("name").isString().notEmpty().withMessage("Name is required"),
    check("age").isNumeric().notEmpty().withMessage("Age is required"), // Changed to `isNumeric` for validation
    check("address").isString().notEmpty().withMessage("Address is required"),
  ],
  (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length) {
      requestHandler(errors, true, (err_message) => {
        return res.status(403).json(err_message);
      });
    } else {
      customerservice.addcustomer(req, res);
    }
  }
);

router.get("/list", (req, res) => {
  customerservice.customerlist(req, res);
});

router.get("/:id", (req, res) => {
  customerservice.viewcustomer(req, res);
});

router.post(
  "/update/:id",
  [
    check("name").isString().notEmpty().withMessage("Name is required"),
    check("age").isNumeric().notEmpty().withMessage("Age is required"),
    check("address").isString().notEmpty().withMessage("Address is required"),
  ],
  (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length) {
      requestHandler(errors, true, (err_message) => {
        return res.status(403).json(err_message);
      });
    } else {
      customerservice.updatecustomer(req, res);
    }
  }
);

router.delete("/:id", (req, res) => {
  customerservice.deletecustomer(req, res);
});

module.exports = router;
