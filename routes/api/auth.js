const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const schemas = require("../../schemas");
const usersCtrl = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  usersCtrl.register
);

router.post("/login", validateBody(schemas.loginSchema), usersCtrl.login);

router.get("/current", authenticate, usersCtrl.getCurrent);

router.post("/logout", authenticate, usersCtrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  usersCtrl.updateAvatar
);

module.exports = router;
