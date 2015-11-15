import DS from 'ember-data';

export default DS.Model.extend({
  filename: DS.attr('string'),
  image: DS.attr('string'),
  // caption: DS.attr('string'),

  // tags: DS.attr('string')
});
