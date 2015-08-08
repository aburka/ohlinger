import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tattoo', function() {});
  this.route('art', function() {});
  this.route('contact');
  this.route('store');
  this.route('about', function() {
    this.route('resume');
  });
});

export default Router;
