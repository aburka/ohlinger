import Ember from 'ember';

const props = ['title', 'url_title', 'url', 'description', 'image'];

export default Ember.Component.extend({
  classNames: ['col-sm-12 col-md-12 press-item'],
  
  model: null,

  session: Ember.inject.service('session'),

  isHidden: true,

  didInsertElement() {
    this.resetFromEvent();
  },

  resetFromEvent() {
    let attrs = _.pick(this.get('model.attributes'), props);
    this.setProperties(attrs);
  },

  actions: {
    showEdit(){
      this.set('isHidden', false);
    },

    cancelEdit(){
      this.set("isHidden", true);
      this.sendAction("cancelEdit");
    },

    savePress() {
      let attrs = this.getProperties(props);
      this.get('model').save(attrs).then(() => {
        this.notifyPropertyChange('model');
      });
      this.set('isHidden', true);
    },

    deletePress() {
      if(confirm("Are you sure you want to delete this item?")) {
        this.get('on-destroy')(this.get('model'));
      }
    }
  }
});
