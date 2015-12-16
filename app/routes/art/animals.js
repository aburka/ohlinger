import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query('Art');
    query.equalTo("category", "Animals");
    query.addDescending('updatedAt');
    return query.find().then(function(results) {
      return _.invoke(results, 'toJSON');
    });
  }
});
