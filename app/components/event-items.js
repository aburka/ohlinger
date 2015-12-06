import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["row"],

  session: Ember.inject.service('session'),
});
