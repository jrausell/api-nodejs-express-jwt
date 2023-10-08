const getId = (req, res, next) => {
  const { username } = req.params;
  req.username = username;
  req.params.username = username;
  next();
};

module.exports = getId;
