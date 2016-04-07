import Ember from 'ember';

export default Ember.Route.extend({
  isSeller: Ember.inject.service('is-seller'),

});
