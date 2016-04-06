import Ember from 'ember';

export function cartTotal(params) {
  // shoppingCart: Ember.inject.service(),

  console.log(params[0]);
    var items = params[0];
    console.log(items);
    var total = 0;
    items.forEach(function(item){
      total = total + item.get('price');
    });
    return total;
  }

export default Ember.Helper.helper(cartTotal);
