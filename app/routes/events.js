import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var twelveAM = moment().startOf('day').toDate();
    var midnight = moment().endOf('day').toDate();
    return Ember.RSVP.hash({
      past: (() => {
        // end_date is before 12am today, or end_date doesn't exist and start_date is before 12am today

        var query1 = new Parse.Query('Event');
        query1.lessThan('end_date', twelveAM);

        var query2 = new Parse.Query('Event');
        query2.doesNotExist('end_date');
        query2.lessThan('start_date', twelveAM);

        var query = Parse.Query.or(query1, query2);
        return query.find().then(function(results) {
          return _.invoke(results, 'toJSON');
        });
      })(),

      current: (() => {
        // start_date is after 12am today or end_date is after 11:59pm today

        var query1 = new Parse.Query('Event');
        query1.greaterThanOrEqualTo('start_date', twelveAM);

        var query2 = new Parse.Query('Event');
        query2.greaterThan('end_date', midnight);

        var query = Parse.Query.or(query1, query2);
        return query.find().then(function(results) {
          return _.invoke(results, 'toJSON');
        });
      })()
    });
  }
});
