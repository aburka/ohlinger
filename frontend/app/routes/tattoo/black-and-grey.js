import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query('Image');
    query.equalTo("category", "Black & Grey");
    query.limit(1000);
    query.addDescending('updatedAt');
    return query.find().then(function(results) {
      return _.invoke(results, 'toJSON');
    });
  }
});
