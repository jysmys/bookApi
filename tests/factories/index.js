module.exports = (factory, Models) => {
  const normalizedPath = require("path").join(_dirname, ".");
  require("fs")
    .readdirSync(normalizedPath)
    .forEach((file) => {
      if (file !== "index.js") {
        require(`./${file}`)(factory, Models);
      }
    });
};
