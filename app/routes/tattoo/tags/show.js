import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var query = new Parse.Query('Image');
    query.equalTo("tags", params);
    return query.find().then(function(results) {
      return _.invoke(results, 'toJSON');
    });
  }
});
