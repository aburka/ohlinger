var FtpHttpAdapter  = require('parse-server-ftp-http-adapter');
var ParseServer     = require('parse-server').ParseServer;
var express         = require('express');
var path            = require('path');

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI:  databaseUri                 || 'mongodb://localhost/ohlinger',
  cloud:        process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId:        process.env.APP_ID          || 'myAppId',
  masterKey:    process.env.MASTER_KEY      || 'myMasterKey',
  fileKey:      process.env.FILE_KEY
  serverURL:    process.env.SERVER_URL      || 'http://localhost:1337/parse',
  filesAdapter: new FtpHttpAdapter({
    ftp: {
      host:     process.env.FILES_FTP_HOST     || 'localhost',
      user:     process.env.FILES_FTP_USER     || 'anonymous',
      password: process.env.FILES_FTP_PASSWORD || 'anonymous@'
    },
    http: {
      host: process.env.FILES_HTTP_HOST || 'localhost',
      port: process.env.FILES_HTTP_PORT || 4200,
      path: process.env.FILES_HTTP_PATH || '/'
    }
  })
});

var app = express();

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('server running on port ' + port + '.');
});
