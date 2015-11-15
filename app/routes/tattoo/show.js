import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var query = new Parse.Query('Image');
    query.get(params, {
      success: function(query){
        return query.find().then(function(results) {
          return _.invoke(results, 'toJSON');
        });
      },
      error: function(error){
        console.log(error);
      }
    });
  }
});
