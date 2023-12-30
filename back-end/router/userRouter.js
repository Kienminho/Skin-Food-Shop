const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// router api user
router.post("/login", userController.handleLogin);
router.post("/register", userController.handleRegister);
router.put("/update-info", userController.updateInfoUser);
router.get("/get-info-mine", userController.getInfoMine);
router.put("/change-password", userController.changePassword);

//admin
router.get(
  "/get-all-users",
  userController.checkPermission,
  userController.getAllUsers
);
router.delete(
  "/delete-user/:id",
  userController.checkPermission,
  userController.deleteUser
);
module.exports = router;
