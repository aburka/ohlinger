import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["col-sm-6", "col-md-3"],
  
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
