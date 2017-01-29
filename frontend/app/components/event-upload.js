import Ember from 'ember';

const props = ['title', 'start_date', 'end_date', 'description', 'event_url_title', 'event_url', 'appointments_available'];

export default Ember.Component.extend({
  tagName: 'form',

  submit(e) {
    e.preventDefault();
    var imageInput = this.$('input[type=file]')[0];
    if(imageInput.files.length > 0) {
      var image = new Parse.Object('Event');
      image.set(this.getProperties(props));
      props.forEach((p) => this.set(p, null));
      var file = imageInput.files[0];
      var imageFile = new Parse.File(image.name, file);
      imageFile.save().then(() => {
        image.set('image', imageFile);
        return image.save();
      }, (error) => {
        console.error(error);
      });
    }
    this.set('isHidden', true);
  },

  isHidden: true,

  actions: {
    openUpload(){
      this.set("isHidden", false);
    },
    cancelUpload(){
      this.set("isHidden", true);
    }
  }
});
