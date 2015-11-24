import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upload-image-button'],
  isUploading: false,

  actions: {
    uploadImage() {
      this.set('isUploading', true);
    }
  }
});
