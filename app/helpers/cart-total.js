import Ember from 'ember';

export function cartTotal(params) {
  console.log(params);
    var items = params[0];
    var total = 0;
    items.forEach(function(item){
      total = total + item.price;
    });
    return total;
  };


export default Ember.Helper.helper(cartTotal);
