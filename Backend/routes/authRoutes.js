const express = require("express");
const multer = require("multer");
const protect = require("../middleware/authmiddleware");
const {
  register,
  login,
  deleteAccount,
  getMe,
  updateProfile,
} = require("../controllers/authController");

const router = express.Router();

// Multer setup for profile picture upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ================== AUTH ROUTES ==================

// Register route (with optional profile picture)
router.post("/register", upload.single("profilePic"), register);

// Login route
router.post("/login", login);

// Delete account (protected)
router.delete("/delete/:id", protect, deleteAccount);

// Get current user info (protected)
router.get("/me", protect, getMe);

// Update profile (protected, with optional profile picture)
router.put("/update/:id", protect, upload.single("profilePic"), updateProfile);

module.exports = router;
