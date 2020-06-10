const models = require("../models");
const booksSerializer = require("../serializers/booksSerializer");

const booksController = {
  async index(req, res) {
    const eachSerializer = booksSerializer.index();
    // query the db for all books
    const booksIndex = await models.Book.findAll(eachSerializer);
    // decide how the json object should look like
    // send the json object to whoever is asking for it
    res.json({ books: booksIndex });
  },
};
module.exports = booksController;
