import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  city: DS.attr(),
  comics: DS.hasMany('comic', {async:true})
});
