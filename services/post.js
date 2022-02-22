const { BlogPost, Category, User } = require('../models');

const categoryService = require('./category');

const { postSchema, updatePostSchema } = require('../schemas');

const { validateWithJoi } = require('../utils/joi');

const { notFoundError, invalidFieldsError, authorizationError } = require('../errors');

const add = async (body, userId) => {
  validateWithJoi(postSchema, body);

  const { title, content, categoryIds } = body;

  await categoryService.validateCategories(categoryIds);

  const post = await BlogPost.create({ title, content, userId });

  await post.addCategories(categoryIds);

  const newPost = await BlogPost.findByPk(post.dataValues.id, {
    include: { model: Category, as: 'categories' },
    raw: true,
  });

  return newPost;
};

const getAll = async () => {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories' },
      ],
    });
  
    return posts;
  };

  const getById = async (id) => {
    const post = await BlogPost.findByPk(id, {
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories' },
      ],
    });
  
    if (!post) { throw notFoundError('Post does not exist'); }
  
    return post;
  };

  const validatePostAuthor = async (postId, userId) => {
    const post = await getById(postId);
  
    if (post.dataValues.id !== userId) { throw authorizationError('Unauthorized user'); }
  
    return post;
  };

  const updateById = async (body, id, userId) => {
    if (body.categoryIds) { throw invalidFieldsError('Categories cannot be edited'); }
  
    validateWithJoi(updatePostSchema, body);
  
    const post = await validatePostAuthor(id, userId);
  
    const { title, content } = body;  
  
    await post.update({
      title,
      content,
    });
  
    return post;
  };

  const deleteById = async (id, userId) => {
    await validatePostAuthor(id, userId);
  
    await BlogPost.destroy({ where: { id } });
  };

module.exports = {
  add,
  getAll,
  getById,
  updateById,
  deleteById,
};