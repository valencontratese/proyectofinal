exports.checkIsAdmin = (req, res, next) => {
  if (req.user.role === 'admin')
    next();
  else
    res.status(403).json({ msg: 'Forbidden' });
};

exports.checkIsTeacherOrAdmin = (req, res, next) => {
  if (req.user.role === 'admin' || req.user.role === 'teacher')
    next();
  else
    res.status(403).json({ msg: 'Forbidden' });
};
