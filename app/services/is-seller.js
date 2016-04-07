import Ember from 'ember';

export default Ember.Service.extend({
  isASeller: false,

  sellerLogin(){
    console.log("service:", this.isASeller);
    this.set('isASeller', true);
  }
});
