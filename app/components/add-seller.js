import Ember from 'ember';

export default Ember.Component.extend({
  newSellerForm: false,

  actions: {
    sellerFormShow(){
      this.set("newSellerForm", true);
    },
    saveSeller(){
      var params = {
        name: this.get('name'),
        city: this.get('city')
      };
      this.set('newSellerForm', false);
      this.sendAction('saveSeller', params);
    }
  }
});
