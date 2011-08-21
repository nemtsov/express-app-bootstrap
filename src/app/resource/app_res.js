var BaseRes = require('./base_res')
  , _ = require('underscore');

var AppRes = module.exports = BaseRes.extend({
  route: function (app) {
    app.get('/', _.bind(this.all, this));
  },

  all: function (req, res) {
    res.render('app/index');
  }
});
