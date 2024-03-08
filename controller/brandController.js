const Brands = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createBrands = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brands.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

const updateBrands = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const newBrands = await Brands.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(newBrands);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBrands = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteBrands = await Brands.findByIdAndDelete(id);
    res.json(deleteBrands);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllBrands = asyncHandler(async (req, res) => {
  try {
    const getAll = await Brands.find();
    res.json(getAll);
  } catch (error) {
    throw new Error(error);
  }
});

const getBrandsById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getBrands = await Brands.findById(id);
    res.json(getBrands);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createBrands,
  updateBrands,
  deleteBrands,
  getAllBrands,
  getBrandsById,
};
