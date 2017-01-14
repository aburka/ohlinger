import Ember from 'ember';

/*
   This component assumes that the images being passed in have the following:
   - image: {url}
   - imageWidth
   - imageHeight
   - title
 */
export default Ember.Component.extend({
  items: Ember.computed(function(){
    var images = this.get('images') || [];
    return images.map((i) => {
      return {
        src: i.image.url,
        w: i.imageWidth,
        h: i.imageHeight,
        title: i.title
      };
    });
  }),

  actions: {
    open(index) {
      // the gallery won't exist if there aren't images in it, so just in case...
      if(this.get('gallery')) {
        this.get('gallery').options.index = index;
        this.get('gallery').init();
      }
    }
  }
});
