import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["row"],

  session: Ember.inject.service('session'),

  actions: {
    destroy(model) {
      model.destroy().then(() => {
        this.get('press').removeObject(model);
      });
    }
  }
});
