const Customer = require("../model/userSchema");

class Customerservice {
  async addcustomer(req, res) {
    try {
      const newCustomer = new Customer({ ...req.body });
      const saveCustomer = await newCustomer.save();
      return res
        .status(200)
        .json({ msg: "Customer saved successfully!", data: saveCustomer });
    } catch (error) {
      return res.status(404).json({
        msg: error.message,
      });
    }
  }

  async customerlist(req, res) {
    try {
      const list = await Customer.find(); // Added `await` to ensure data retrieval
      return res.status(200).json({ data: list });
    } catch (error) {
      return res.status(404).json({
        msg: error.message,
      });
    }
  }

  async viewcustomer(req, res) {
    try {
      const id = req.params.id; // Corrected the parameter name
      const viewlist = await Customer.findOne({ _id: id });
      return res.status(200).json({ data: viewlist });
    } catch (error) {
      return res.status(404).json({
        msg: error.message,
      });
    }
  }

  async updatecustomer(req, res) {
    try {
      const id = req.params.id; // Corrected the parameter name
      const updateCustomer = await Customer.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true, runValidators: true }
      );
      return res.status(200).json({ data: updateCustomer });
    } catch (error) {
      return res.status(404).json({
        msg: error.message,
      });
    }
  }

  async deletecustomer(req, res) {
    try {
      const id = req.params.id; // Corrected the parameter name
      await Customer.findOneAndDelete({ _id: id });
      return res.status(200).json({ msg: "Customer deleted successfully!" });
    } catch (error) {
      return res.status(404).json({
        msg: error.message,
      });
    }
  }
}

module.exports = new Customerservice();
