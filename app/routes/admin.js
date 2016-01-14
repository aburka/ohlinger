import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    downloadImages() {
      var tattoos = Parse.Object.extend("Image");
      var query = new Parse.Query(tattoos);
      query.limit(1000);
      return query.find().then(function(results) {
        var imageObject = _.invoke(results, 'toJSON');
        imageObject.forEach(function(imageObject){
          var url = imageObject.image.url;
          console.log(url);
          // var blob = new Blob([url], {type: "image/jpeg"});
          // saveAs(blob, "images.zip");
        });
      });
      // var url = image.get("image").url;
      // console.log(url);
    }
  }
});
