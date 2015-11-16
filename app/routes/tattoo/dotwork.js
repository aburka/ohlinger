import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query('Image');
    query.equalTo("category", "Dotwork");
    return query.find().then(function(results) {
      return _.invoke(results, 'toJSON');
    });
  }
});