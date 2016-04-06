import DS from 'ember-data';

export default DS.Model.extend({

  series: DS.attr(),
  writer: DS.attr(),
  artist: DS.attr(),
  seller: DS.belongsTo('seller', {async:true}),
  description: DS.attr(),
  issueNo: DS.attr(),
  year: DS.attr(),
  publisher: DS.attr(),
  price: DS.attr(),
  condition: DS.attr(),
  category: DS.attr(),
  image: DS.attr()
});
