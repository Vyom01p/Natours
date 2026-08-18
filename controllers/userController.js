const User = require('./../models/userModel');
const Tour = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is not defined! Please use /signup instead ',
  });
};
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'Success',
    data: null,
  });
});
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
//Do not update passwords with this
exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
