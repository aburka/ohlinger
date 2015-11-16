import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var query = new Parse.Query('Image');
    query.containsAll("tags", [params.tag]);
    return query.find().then(function(results) {
      return _.invoke(results, 'toJSON');
    });
  }
});
