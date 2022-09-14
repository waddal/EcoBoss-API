function restricted(req, res, next) {
  // auth mw hit
  if (req.session.user) {
    next();
  } else {
    next({ status: 401, message: 'Bad credentials' });
  }
}

module.exports = {
  restricted,
};
