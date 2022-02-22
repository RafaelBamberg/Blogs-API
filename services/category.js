const { Category } = require('../models');

const { categorySchema } = require('../schemas');

const { validateWithJoi } = require('../utils/joi');

const { invalidFieldsError } = require('../errors');

const add = async (_category) => {
  validateWithJoi(categorySchema, _category);

  const category = await Category.create(_category);

  return category.dataValues;
};

const getAll = async () => {
  const categories = await Category.findAll({ raw: true });

  return categories;
};

const getById = async (id) => {
  const category = await Category.findByPk(id);

  if (!category) { throw invalidFieldsError('"categoryIds" not found'); }

  return category;
};

const validateCategories = async (categories) => {
  await Promise.all(categories.map(async (categoryId) => { await getById(categoryId); }));
};

module.exports = {
  add,
  getAll,
  validateCategories,
};