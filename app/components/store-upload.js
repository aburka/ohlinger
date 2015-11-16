import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  submit(e) {
    e.preventDefault();
    var imageInput = this.$('input[type=file]')[0];
    if(imageInput.files.length > 0) {
      var image = new Parse.Object('Shop');
      image.set(this.getProperties('title', 'description', 'price', 'purchase'));
      var file = imageInput.files[0];
      var imageFile = new Parse.File(image.name, file);
      imageFile.save().then(() => {
        image.set('image', imageFile);
        return image.save();
      }, (error) => {
        console.error(error);
      });
    }
  }
});
