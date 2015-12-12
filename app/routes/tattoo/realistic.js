import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query('Image');
    query.equalTo("category", "Realistic");
    return query.find().then(function(results) {
      var sortedResults = results.sort(function(a, b) {
        if (a.updatedAt < b.updatedAt) {
          return -1;
        } else if (a.updatedAt === b.updatedAt) {
          return 0;
        } else {
          return 1;
        }
      });
      return _.invoke(sortedResults, 'toJSON');    });
  }
});
