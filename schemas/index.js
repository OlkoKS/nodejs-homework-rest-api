const { addContactSchema } = require("./contacts");
const { updateFavoriteSchema } = require("./contacts");
const { registerSchema } = require("./user");
const { loginSchema } = require("./user");
const { emailSchema } = require("./user");

const schemas = {
  addContactSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  emailSchema,
};

module.exports = schemas;
