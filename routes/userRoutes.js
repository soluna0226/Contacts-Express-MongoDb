const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const router = express.Router();

// const { getContact, createContact, getContacts, updateContact, deleteContact } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/current", currentUser);


module.exports = router;