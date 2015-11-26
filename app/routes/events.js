import Ember from 'ember';

export default Ember.Route.extend({

  'event-store': Ember.inject.service('event-store'),

  model: function(){
    this.get('event-store').fetch();
    return {
      past: this.get('event-store.past'),
      current: this.get('event-store.current')
    };
  }
});
