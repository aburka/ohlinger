import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // delete: function(artwork){
    //   artwork.destroyRecord();
    // },
    //
    // edit: function(artwork){
    //   artwork.save();
    // },

    filepick: function(blob){
      console.log(blob, "blob");
      var upload = this.store.createRecord('image', {
        url : blob.url,
        filename : blob.filename,
      });
      upload.save(blob);
    }
  }
});
