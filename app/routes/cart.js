import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    remove(item){
      this.get('shoppingCart').remove(item);
    }
  }
});
