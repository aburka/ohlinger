import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tattoo', function() {
    this.route('color');
    this.route('illustration');
    this.route('black-and-grey');
    this.route('dotwork');
    this.route('realistic');
    this.route('show', {path: ':objectId'});
    this.route('tags', function() {
      this.route('show', {path: ':tag'});
    });
  });
  this.route('art', function() {});
  this.route('store');
  this.route('about', function() {
    this.route('resume');
    this.route('contact');
    this.route('meet-jj');
  });
  this.route('events');
  this.route('admin', function() {
    this.route('upload');
  });
  this.route('sessions');
});

export default Router;
