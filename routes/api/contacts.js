const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts.js");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addContactSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validateBody(schemas.addContactSchema),
  ctrl.updateContact
);

module.exports = router;
