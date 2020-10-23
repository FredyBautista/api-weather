const getGreeting = (req, res) =>
  res.send({
    greeting: "Hello World",
  });

module.exports = getGreeting;
