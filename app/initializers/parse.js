import config from 'ohlinger/config/environment';

export function initialize(/* container, application */) {
  Parse.initialize(config.Parse.applicationId, config.Parse.jsKey);
}

export default {
  name: 'parse',
  initialize: initialize
};
