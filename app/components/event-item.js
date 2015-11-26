import Ember from 'ember';

// whitelist of allowed/used props
const props = ['title', 'start_date', 'end_date', 'description', 'image',
  'thumbnail'];

export default Ember.Component.extend({
  classNames: ["col-xs-12 col-sm-3 col-md-4"],

  event: null,
  "on-save": null,

  title: null,
  start_date: null,
  end_date: null,
  description: null,
  image: null,
  thumbnail: null,

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

  resetOnInit: Ember.on('init', function() {
    this.resetFromEvent();
  }),

  resetFromEvent() {
    this.setProperties(_.pick(this.get('event'), props));
  },

  actions: {
    showEdit(){
      this.set("isHidden", false);
    },

    cancelEdit(){
      this.set("isHidden", true);
      this.resetFromEvent();
    }

  }
});
