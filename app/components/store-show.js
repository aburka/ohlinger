import Ember from 'ember';

const props = ['title', 'price', 'description', 'purchase', 'image'];
export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  isEditing: false,

  didInsertElement() {
    this.reset();
  },

  reset() {
    let attrs = _.pick(this.get('model.attributes'), props);
    this.setProperties(attrs);
  },

  actions: {
    edit(){
      this.set("isEditing", true);
    },

    cancel(){
      this.set("isEditing", false);
      this.reset();
    },

    save() {
      let attrs = this.getProperties(props);
      this.get('model').save(attrs).then(() => {
        this.notifyPropertyChange('model');
      });
      this.set('isEditing', false);
    },

    destroy() {
      if(confirm("Are you sure you want to delete this item?")) {
        this.get('model').destroy().then(() => {
          window.history.back();
        });
      }
    }
  }
});
