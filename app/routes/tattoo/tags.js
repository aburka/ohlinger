import Ember from 'ember';

export default Ember.Route.extend({
  model: function(tag){
    var query = new Parse.Query('Image');
    query.equalTo("tags", tag);
    return query.find().then(function(results) {
      return _.invoke(results, 'toJSON');
    });
  }
});
