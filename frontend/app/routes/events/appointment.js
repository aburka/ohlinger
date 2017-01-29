import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var query = new Parse.Query('Event');
    return query.get(params.objectId);
  }
});
