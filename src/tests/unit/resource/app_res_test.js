var vows = require('vows')
  , assert = require('assert')
  , AppRes = require('../../../app/resource/app_res');

vows.describe('App Resource').addBatch({
  'application resource test': {
    topic: new AppRes(),

    'what is the answer': function(res) {
      assert.equal(42, 42);
    }
  }
})['export'](module);

