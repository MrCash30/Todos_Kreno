module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        },
        todoId: {
            type: DataTypes.INTEGER
        }
    });
    // Comment.associate = function(models){
    //     Comment.belongsTo(models.Todo,{
    //         foreignKey: 'todoId'
    //     })
    // };

    return Comment;
};