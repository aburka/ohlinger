import Ember from 'ember';

export function dateRange(params/*, hash*/) {
  let [start, end] = params;
  start = Ember.Handlebars.Utils.escapeExpression(start);
  end = Ember.Handlebars.Utils.escapeExpression(end);

  let format = 'dddd, MMMM Do, YYYY';

  return new Ember.Handlebars.SafeString(
    (start ? `<span class="start">${moment(new Date(start)).format(format)}</span>` : '') +
    (start && end ? ' through ' : '') +
    (end ? `<span class="end">${moment(new Date(end)).format(format)}</span>` : '')
  );
}

export default Ember.Helper.helper(dateRange);
