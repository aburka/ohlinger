import Ember from 'ember';

const props = ['title', 'start_date', 'end_date', 'description', 'image'];

export default Ember.Component.extend({
  classNames: ["col-xs-12 col-sm-3 col-md-4"],

  model: null,

  session: Ember.inject.service('session'),

  isHidden: true,

  dateFormatter: {
    toDisplay(date) {
      var d = new Date(date);
      return moment(d).format('MM/DD/YYYY');
    },

    toValue(date) {
      return new Date(date);
    },
  },

  didInsertElement() {
    this.resetFromEvent();
  },

  resetFromEvent() {
    let attrs = _.pick(this.get('model.attributes'), props);
    this.setProperties(attrs);
  },

  actions: {
    showEdit(){
      this.set("isHidden", false);
    },

    cancelEdit(){
      this.set("isHidden", true);
      this.resetFromEvent();
    },

    saveEvent() {
      let attrs = this.getProperties(props);
      this.get('model').save(attrs).then(() => {
        this.notifyPropertyChange('model');
      });
      this.set('isHidden', true);
    },

    deleteEvent() {
      this.get('onDestroy')(this.get('model'));
    }
  }
});
