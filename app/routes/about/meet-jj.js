import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var query = new Parse.Query('Press');
    query.addDescending('updatedAt');
    return query.find();
  }
});
