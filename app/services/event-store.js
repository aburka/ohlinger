import Ember from 'ember';

const twelveAM = moment().startOf('day').toDate();
const midnight = moment().endOf('day').toDate();
const past = [];
const current = [];

function serializeEvent(event) {
  return _.extend({}, event.toJSON(), {
    start_date: event.get('start_date'),
    end_date: event.get('end_date')
  });
}

export default Ember.Service.extend({
  past: null,
  current: null,

  init() {
    this._super(...arguments);
    this.set('past', past);
    this.set('current', current);
  },

  fetch() {
    this._fetchPast();
    this._fetchCurrent();
  },

  // end_date is before 12am today, or end_date doesn't exist and start_date is before 12am today
  _fetchPast() {
    var query1 = new Parse.Query('Event');
    query1.lessThan('end_date', twelveAM);

    var query2 = new Parse.Query('Event');
    query2.doesNotExist('end_date');
    query2.lessThan('start_date', twelveAM);

    var query = Parse.Query.or(query1, query2);
    return query.find().then((results) => {
      past.setObjects(results.map((r) => serializeEvent(r) ));
    });
  },

  // start_date is after 12am today or end_date is after 11:59pm today
  _fetchCurrent() {
    var query1 = new Parse.Query('Event');
    query1.greaterThanOrEqualTo('start_date', twelveAM);

    var query2 = new Parse.Query('Event');
    query2.greaterThan('end_date', midnight);

    var query = Parse.Query.or(query1, query2);
    return query.find().then((results) => {
      current.setObjects(results.map((r) => serializeEvent(r) ));
    });
  }
});
