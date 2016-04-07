import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  totalCost: Ember.computed('shoppingCart.items.[]', function(){
    var items = this.get('shoppingCart.items');
    var total = 0;

    items.forEach(function(item){
      total = total + parseFloat(item.get('price'));
    });

    if(total){
      return "Total Cost: $" + total;
    }
    else {
      return "cart is empty, keep shopping";
    }
  })

});
