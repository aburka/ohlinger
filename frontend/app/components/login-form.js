import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:parse-username', username, password).catch((reason) => {
        this.set('error', reason);
      });
    }
  }
});
