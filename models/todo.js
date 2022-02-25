module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo", {
        title: {
            type: DataTypes.STRING,
            defaultValue: null // or whatever you would like
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: null // or whatever you would like
        }
    });
    // Todo.associate = function(models){
    //     Todo.hasMany(models.Comment)
    // };

    return Todo;
};