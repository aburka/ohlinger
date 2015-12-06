import Ember from 'ember';

const twelveAM = moment().startOf('day').toDate();
const midnight = moment().endOf('day').toDate();

export default Ember.Component.extend({
  classNames: ["row"],

  session: Ember.inject.service('session'),
  // end_date is before 12am today, or end_date doesn't exist and start_date is before 12am today
  past: Ember.computed('events.[]', function() {
    return this.get('events').filter((model) => {
      let {end_date, start_date} = model.attributes;
      return moment(end_date).isBefore(twelveAM) ||
        (!end_date && moment(start_date).isBefore(twelveAM));
    });
  }),

  // current: start_date is after 12am today or end_date is after 11:59pm today
  current: Ember.computed('events.[]', function() {
    return this.get('events').filter((model) => {
      let {end_date, start_date} = model.attributes;
      return moment(start_date).isAfter(twelveAM) ||
        moment(end_date).isAfter(midnight);
    });
  })
});
