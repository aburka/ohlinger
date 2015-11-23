import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query('Art');
    query.equalTo("category", "Other Drawings");
    return query.find().then(function(results) {
      return _.invoke(results, 'toJSON');
    });
  }
});
