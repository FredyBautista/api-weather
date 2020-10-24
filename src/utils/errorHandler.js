const errorHandler = (req, res) =>
  res.status(404).send({
    status: 404,
    error: "Not found",
  });

module.exports = errorHandler;
