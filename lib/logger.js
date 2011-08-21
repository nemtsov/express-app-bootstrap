var log = exports.log = function () {
  var args = [].slice.call(arguments);
  args.unshift('info');
  typelog.apply(null, args);
};

var err = exports.err = function () {
  var args = [].slice.call(arguments);
  args.unshift('error');
  typelog.apply(null, args);
};

var logHr = exports.logHr = function () {
  log('--------------------------------'
    + '--------------------------------'
    + '--------');
};

var typelog = function () {
  var args = [].slice.call(arguments)
    , type = args.shift()
    , first = args.shift();
  first = ('[' + type.toUpperCase() + '] ' + first);
  args.unshift(first);
  console.log.apply(console, args);
};
