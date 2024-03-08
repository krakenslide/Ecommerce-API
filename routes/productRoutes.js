const express = require("express");
const {
  createProduct,
  getProductById,
  getAllProduct,
  updateProduct,
  deleteProductById,
  addToWishlist,
  rating,
  uploadImages,
} = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");
const router = express.Router();

router.get("/getproductbyid/:id", getProductById);
router.get("/getallproduct/", getAllProduct);
router.put("/ratings", authMiddleware, isAdmin, rating);
router.post("/createproduct", authMiddleware, isAdmin, createProduct);
router.post("/updateproduct/:id", authMiddleware, isAdmin, updateProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.post("/deleteproduct/:id", authMiddleware, isAdmin, deleteProductById);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

module.exports = router;
