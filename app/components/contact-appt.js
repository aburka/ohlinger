import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitContact: function(){
      this.sendAction('submitContact', this.getProperties('name', 'email', 'phone', 'comments'));
      this.set('name');
      this.set('email');
      this.set('phone');
      this.set('comments');
    }
  },
});
