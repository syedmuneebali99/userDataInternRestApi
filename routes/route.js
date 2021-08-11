const express = require("express");

const router = express.Router();

const userController = require("../controller/route");

router.get("/user", userController.getAllUser);

router.post("/user", userController.postUser);

router.put("/user/:userId", userController.putUser);

router.delete("/user/:userId", userController.deleteUser);

module.exports = router;
