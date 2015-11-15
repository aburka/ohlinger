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
    this.route('show', {path: ':id'});
    this.route('tags', {path: ':tag'}, function() {
      this.route('show');
    })
  });
  this.route('art', function() {});
  this.route('store');
  this.route('about', function() {
    this.route('resume');
    this.route('contact');
    this.route('press');
  });
  this.route('events');
  this.route('admin', function() {
    this.route('upload');
  });
  this.route('sessions');
});

export default Router;
