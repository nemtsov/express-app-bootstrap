var wrench = require('wrench')
  , logger = require('./logger');

var log = logger.log
  , logHr = logger.logHr
  , err = logger.err;

var srcPath = (__dirname + '/../src')
  , destPath = process.cwd() + '/'
      + (process.argv[2] || 'express-site');

log('Copying the sources to "%s"...', destPath);
wrench.copyDirSyncRecursive(srcPath, destPath);
log('Done. Don\'t forget to run "npm install".');

