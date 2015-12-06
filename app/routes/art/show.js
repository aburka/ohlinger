import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var query = new Parse.Query('Art');
    return query.get(params.objectId);
  }
});
