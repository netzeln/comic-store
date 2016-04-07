import Ember from 'ember';

export default Ember.Component.extend({
  isSeller: Ember.inject.service('is-seller'),

  actions: {
    sellerLogin(isSeller){
      console.log(isSeller.isASeller);
      this.get('isSeller').sellerLogin(isSeller);
    }
  }
});
