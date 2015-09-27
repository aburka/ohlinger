import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tattoo', function() {
    this.route('color');
    this.route('bg');
    this.route('dots');
    this.route('realism');
    this.route('illustration');
    this.route('show', {path: '/:id'});
    this.route('all');
  });
  this.route('art', function() {});
  this.route('contact');
  this.route('store');
  this.route('about', function() {
    this.route('resume');
    this.route('press');
  });
});

export default Router;
