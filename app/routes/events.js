import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query("Event");
    query.descending();
    return query.find();
  }
});
