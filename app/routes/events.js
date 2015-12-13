import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query("Event");
    query.addAscending('start_date');
    return query.find();
  } 
});
