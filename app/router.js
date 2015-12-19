import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tattoo', function() {
    this.route('color');
    this.route('black-and-grey');
    this.route('show', {path: ':objectId'});
    this.route('tags', function() {
      this.route('show', {path: ':tag'});
    });
  });
  this.route('art', function() {
    this.route('subway-paintings');
    this.route('temporary-permanence');
    this.route('animals');
    this.route('portraits');
    this.route('other-paintings-and-drawings');
    this.route('show', {path: ':objectId'});
  });
  this.route('store', function() {
    this.route('show', {path: ':objectId'});
  });
  this.route('about', function() {
    this.route('process');
    this.route('contact');
    this.route('meet-jj');
  });
  this.route('events', function() {
    this.route('appointment', {path: ':objectId'});
  });
  this.route('admin', function() {
    this.route('upload');
  });
  this.route('sessions');
  this.route('login');
});

export default Router;
