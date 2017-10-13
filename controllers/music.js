/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('music', {
    title: 'Music'
  });
};
