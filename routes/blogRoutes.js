const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createBlog,
  updateBlog,
  getBlogById,
  getAllBlogs,
  deleteBlogById,
  likeBlog,
  dislikeBlog,
  uploadImages,
} = require("../controller/blogController");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.get("/getblog", getAllBlogs);
router.get("/getblog/:id", getBlogById);
router.post("/", authMiddleware, isAdmin, createBlog);
router.post("/:id", authMiddleware, isAdmin, updateBlog);
router.put("/likes", authMiddleware, isAdmin, likeBlog);
router.put("/dislikes", authMiddleware, isAdmin, dislikeBlog);
router.delete("/deleteblog/:id", authMiddleware, isAdmin, deleteBlogById);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  blogImgResize,
  uploadImages
);

module.exports = router;
