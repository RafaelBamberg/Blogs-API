const associate = (models) => {
    models.BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };
  
  module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      tableName: 'BlogPosts',
      timestamps: true,
      createdAt: 'published',
      updatedAt: 'updated',
    });
  
    BlogPost.associate = associate;
    return BlogPost;
  };