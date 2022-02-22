const associate = ((models) => {
    models.User.hasMany(models.BlogPost, { as: 'blogPosts', foreignKey: 'userId' });
  });
  
  module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, 
    {
      tableName: 'Users',
      timestamps: false,
    });
  
    User.associate = associate;
    return User;
  };