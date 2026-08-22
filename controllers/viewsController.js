const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
exports.getOverview = catchAsync(async (req, res, next) => {
  //1) Get tour data form the collecttion
  const tours = await Tour.find();
  //2) Build template
  //3) render that template using tour data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});
exports.getTour = catchAsync(async (req, res, next) => {
  //1) get the datafor the requested tour (including guides and reviews)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fileds: 'review rating user',
  });
  //2)Build template
  //3) render template suing data from 1
  res.status(200).render('tour', {
    title: 'The Forest Hiker',
    tour,
  });
});
