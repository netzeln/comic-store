import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('title'),
  series: DS.attr('series'),
  writer: DS.attr('writer'),
  artist: DS.attr('artist'),
  seller: DS.belongsTo('seller', {async:true}),
  description: DS.attr('description'),
  issueNo: DS.attr('issueNo'),
  year: DS.attr('year'),
  publisher: DS.attr('publisher'),
  price: DS.attr('price'),
  condition: DS.attr('condition'),
  category: DS.attr('category'),
  image: DS.attr('image')
});
