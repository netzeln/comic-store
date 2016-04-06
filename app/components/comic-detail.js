import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item){
      this.get('shoppingCart').add(item);
      alert('Item Added To Cart');
      console.log(item.inCart);
    },
    remove(item){
      this.get('shoppingCart').remove(item);
    }

  }

});
