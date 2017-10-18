/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('lede', {
    title: 'Lede'
  });
};