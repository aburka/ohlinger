import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["col-xs-12 col-sm-3 col-md-4"],

  session: Ember.inject.service('session'),

  isHidden: true,

  actions: {
    showEdit(){
      this.set("isHidden", false);
    },
    cancelEdit(){
      this.set("isHidden", true);
    }
  }
});
