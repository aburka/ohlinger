import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var query = new Parse.Query('Art');
    query.equalTo("category", "Subway Paintings");
    return query.find().then(function(results) {
      var sortedResults = results.sort(function(a, b) {
        if (a.updatedAt < b.updatedAt) {
          return a;
        } else if (a.updatedAt === b.updatedAt) {
          return a;
        } else {
          return b;
        }
      });
      return _.invoke(sortedResults, 'toJSON');
    });
  }
});
