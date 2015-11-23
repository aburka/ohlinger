import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query('Art');
    query.equalTo("category", "Other Paintings");
    return query.find().then(function(results) {
      return _.invoke(results, 'toJSON');
    });
  }
});