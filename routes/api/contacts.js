const express = require("express");
const router = express.Router();
const schemas = require("../../schemas");
const { validateBody, isValidId } = require("../../middlewares");
const { listContacts } = require("../../controllers/contacts");

router.get("/", listContacts);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.addContactSchema), addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addContactSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
