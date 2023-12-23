const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// router api user
router.post("/user/login", userController.handleLogin);
router.post("/user/register", userController.handleRegister);
router.put("/user/update-info", userController.updateInfoUser);
router.get("/user/get-info-mine", userController.getInfoMine);
router.put("/user/change-password", userController.changePassword);
module.exports = router;
