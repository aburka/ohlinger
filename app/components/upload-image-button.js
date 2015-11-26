import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upload-image-button'],
  isUploading: false,

  input: null,
  loadInput: function() {
    this.set('input', this.$('[data-behavior=hidden-file-input]'));
  }.on('didInsertElement'),

  actions: {
    loadFile() {
      var input = this.get('input');
      input.trigger('click');
    },

    uploadImage() {
      this.set('isUploading', true);
      var input = this.get('input');
      var file = input[0].files[0];
      var imageFile = new Parse.File(file.name, file);
      imageFile.save()
      .then(() => {
        this.set('value', imageFile.toJSON());
        this.sendAction('on-upload', imageFile.toJSON());
      })
      .always(() => {
        this.set('isUploading', false);
      });
    }
  }
});
