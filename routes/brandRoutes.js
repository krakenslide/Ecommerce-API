const express = require("express");
const {
  createBrands,
  updateBrands,
  deleteBrands,
  getAllBrands,
  getBrandsById,
} = require("../controller/brandController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllBrands);
router.get("/:id", getBrandsById);
router.post("/", authMiddleware, isAdmin, createBrands);
router.post("/:id", authMiddleware, isAdmin, updateBrands);
router.delete("/:id", authMiddleware, isAdmin, deleteBrands);

module.exports = router;
