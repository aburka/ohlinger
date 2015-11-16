import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('file'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  purchase: DS.attr('string'),
  price: DS.attr('string')
});
