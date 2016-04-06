import Ember from 'ember';

export function cartTotal(params) {
  // shoppingCart: Ember.inject.service(),


    var items = params[0];

    var total = 0;
    items.forEach(function(item){
      total = total + item.get('price');
    });
    if( total){
      return "Total Cost: $" + total;
    }
    else {
      return "cart is empty, keep shopping";
    }
  }

export default Ember.Helper.helper(cartTotal);
