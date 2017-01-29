import Base from 'ember-simple-auth/authenticators/base';

import Ember from 'ember';
const Promise = Ember.RSVP.Promise;

export default Base.extend({
  restore() {
    return new Promise((resolve, reject) => {
      let user = Parse.User.current();
      if(user) {
        resolve( user );
      } else {
        reject();
      }
    });
  },

  authenticate(username, password) {
    return Parse.User.logIn(username, password);
  },

  invalidate() {
    return Parse.User.logOut();
  }
});
