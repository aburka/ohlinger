/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ohlinger',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'self' * ",
      'script-src': "'self' * ",
      'font-src': "'self' * ",
      'connect-src': "'self' * ",
      'img-src': "'self' * ",
      'style-src': "'self' * ",
      'media-src': "'self' * "
    },

    APP: {

    },

    'ember-simple-auth': {
      routeAfterAuthentication: 'admin',
      routeIfAlreadyAuthenticated: 'admin'
    },

    Parse: {
      applicationId: 'ZEnFPixpSlTvgyHxyxmsHtwmFg5HRNOZ2AhIxecm',
      jsKey: 'WmwYp0CYRN1fCQK9nLqy9GvSSryZfDPAborMEE1v'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/tattoo/';
    ENV.locationType = 'hash';
  }

  return ENV;
};
