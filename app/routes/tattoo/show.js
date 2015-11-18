import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var query = new Parse.Query('Image');
    return query.get(params.objectId).then(function(image) {
      return image.toJSON();
    });
  }
});
