import DS from 'ember-data';
import Ember from 'ember';
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
  image: DS.attr(),

  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function(){
    return this.get('shoppingCart').includes(this);
  })
});
