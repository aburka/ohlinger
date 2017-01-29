import config from 'ohlinger/config/environment';

export function initialize(/* container, application */) {
  Parse.initialize(config.Parse.applicationId, 'unused');
  Parse.serverURL = config.Parse.serverURL;
}

export default {
  name: 'parse',
  initialize: initialize
};
