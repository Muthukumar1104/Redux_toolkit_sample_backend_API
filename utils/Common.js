const bcrypt = require("bcrypt");

module.exports.requestHandler = async (errors, isError, Callback) => {
  if (isError) {
    const errorObject = errors.reduce((acc, error) => {
      acc[error.path] = error.msg;
      return acc;
    }, {});
    Callback(errorObject);
  }
};

module.exports.hashPassword = async (pass) => {
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
    const bycryptpass = await bcrypt.hash(pass, salt);
    return bycryptpass;
  } catch (error) {
    throw error;
  }
};
