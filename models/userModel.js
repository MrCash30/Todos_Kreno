module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return User;
};