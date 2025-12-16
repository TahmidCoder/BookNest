const express = require("express");
const router = express.Router();
const protect = require("../middleware/authmiddleware");
const sellerProtect = require("../middleware/sellermiddleware");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Public routes
router.get("/", getProducts);
router.get("/:id", getProduct);

// Protected seller routes
router.post(
  "/create",
  protect,
  sellerProtect,
  upload.single("image"),
  createProduct
);
router.put(
  "/update/:id",
  protect,
  sellerProtect,
  upload.single("image"),
  updateProduct
);
router.delete("/delete/:id", protect, sellerProtect, deleteProduct);

module.exports = router;
