const buildQuery = (queryObject, excludeFields) => {
  const filteredQuery = { ...queryObject };

  excludeFields.forEach((element) => delete filteredQuery[element]);

  let queryString = JSON.stringify(filteredQuery);
  queryString = queryString.replace(
    /\b(gte|gt|lte|lt)\b/gm,
    (match) => `$${match}`
  );
  return JSON.parse(queryString);
};

const sortQuery = (sortString) => {
  const sortBy = sortString.split(",").join(" ");
  return sortBy;
};

module.exports = { buildQuery, sortQuery };

//const allProducts = await Product.find(req.query); this is simple filtering.
// const allProducts = await Product.find({
//   brand: req.query.brand,
//   category: req.query?.category,
// }); another way of filtering
//const allProducts = await Product.where("category").equals(eq.query.category); third way of doing
