const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createUser,
  loginUserCtrl,
  logout,
  getAllUsers,
  handleRefreshToken,
  getUser,
  updateUser,
  deleteUserById,
  deleteUserByEmail,
  blockUser,
  forgotPasswordToken,
  unblockUser,
  updatePassword,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
} = require("../controller/userController");

router.get("/refresh", handleRefreshToken);
router.get("/getwishlist", authMiddleware, isAdmin, getWishlist);
router.get("/logout", logout);
router.get("/all-users", getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.post("/reset-password/:token", resetPassword);
router.post("/address", authMiddleware, saveAddress);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/password", authMiddleware, isAdmin, updatePassword);
router.post("/login", loginUserCtrl);
router.post("/adminlogin", loginAdmin);
router.post("/register", createUser);
router.delete("/:id", deleteUserById);
router.post("/deleteuserbyemail", deleteUserByEmail);
router.put("/update-user/:id", authMiddleware, isAdmin, updateUser);
router.post("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.post("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
