module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('PostsCategories', {
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'BlogPosts',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        categoryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Categories',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      });
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('PostsCategories');
    },
  };