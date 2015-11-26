import Ember from 'ember';

const twelveAM = moment().startOf('day').toDate();
const midnight = moment().endOf('day').toDate();

export default Ember.Service.extend({
  past: null,
  current: null,

  init() {
    this._super(...arguments);
    this.set('past', []);
    this.set('current', []);
  },

  fetch() {
    this.fetchPast();
    this.fetchCurrent();
  },

  // end_date is before 12am today, or end_date doesn't exist and start_date is before 12am today
  fetchPast() {
    var query1 = new Parse.Query('Event');
    query1.lessThan('end_date', twelveAM);

    var query2 = new Parse.Query('Event');
    query2.doesNotExist('end_date');
    query2.lessThan('start_date', twelveAM);

    var query = Parse.Query.or(query1, query2);
    return query.find().then((results) => {
      let pastEvents = this.get('past');
      pastEvents.setObjects([]);
      pastEvents.pushObjects(results.map((r) => {
        return _.extend({}, r.toJSON(), {
          start_date: r.get('start_date'),
          end_date: r.get('end_date')
        });
      }));
    });
  },

  // start_date is after 12am today or end_date is after 11:59pm today
  fetchCurrent() {
    var query1 = new Parse.Query('Event');
    query1.greaterThanOrEqualTo('start_date', twelveAM);

    var query2 = new Parse.Query('Event');
    query2.greaterThan('end_date', midnight);

    var query = Parse.Query.or(query1, query2);
    return query.find().then((results) => {
      let currentEvents = this.get('current');
      currentEvents.setObjects([]);
      currentEvents.pushObjects(results.map((r) => {
        return _.extend({}, r.toJSON(), {
          start_date: r.get('start_date'),
          end_date: r.get('end_date')
        });
      }));
    });
  }
});
