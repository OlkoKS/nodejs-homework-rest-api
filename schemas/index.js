const { addContactSchema } = require("./contacts");
const { updateFavoriteSchema } = require("./contacts");
const { registerSchema } = require("./user");
const { loginSchema } = require("./user");

const schemas = {
  addContactSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
};

module.exports = schemas;
