import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('file'),
  title: DS.attr('string'),
  caption: DS.attr('string'),
  tags: DS.attr('array')
});
