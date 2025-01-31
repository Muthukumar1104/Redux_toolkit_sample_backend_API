const Auth = require("../model/authSchema");
const { hashPassword } = require("../utils/Common");

class AuthService {
  async signup(req, res) {
    const { email, newpassword, confirmpassword } = req.body;
    const checkemail = await Auth.findOne({ email: email });
    console.log("checkasdasd", checkemail);
    let bycrypt;
    if (checkemail?.length == 0) {
      return res.status(401).json({
        msg: "User already exists",
      });
    } else {
      if (newpassword == confirmpassword) {
        bycrypt_hash = await hashPassword(newpassword);
      }
      const insertfield = {
        ...req.body,
        newpassword: bycrypt_hash,
        confirmpassword: confirmpassword,
      };
      const authuser = new Auth(insertfield);
      const saveuser = authuser.save();
      return res.status(200).json({ msg: "User details added successfully" });
    }
  }
}

module.exports = new AuthService();
