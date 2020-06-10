"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: DataTypes.STRING,
      allowNull: false,
      validate: {
        noEmpty: { args: true, msg: "You need to set a title!" },
      },
    },
    {}
  );
  Book.associate = function (models) {
    // associations can be defined here
  };
  return Book;
};
