import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('name'),
  city: DS.attr('city'),
  comics: DS.hasMany('comic', {async:true})
});
