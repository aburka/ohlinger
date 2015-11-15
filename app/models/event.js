import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  start_date: DS.attr('date'),
  end_date: DS.attr('date'),
  description: DS.attr('string'),
  image: DS.attr('file')
});
