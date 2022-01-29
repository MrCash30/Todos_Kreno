module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo", {
        text: {
            type: DataTypes.STRING,
            allowNull: { args: true, msg: "You must enter a name" }
        }
    });
    return Todo;
};