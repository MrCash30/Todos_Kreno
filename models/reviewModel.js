module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("review", {
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Review;
};