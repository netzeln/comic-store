import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      comics: this.store.findAll('comic'),
      sellers: this.store.findAll('seller')
    });
  },

  actions: {
    saveSeller(params){
      var newSeller = this.store.createRecord('seller', params);
      newSeller.save();
      this.transitionTo('sellers');

    }
    // actions: {
    //   saveComic(params){
    //     var newComic = this.store.createRecord('comic', params);
    //     var seller = params.seller;
    //     console.log(seller);
    //     seller.get('comics').addObject(newComic);
    //     newComic.save().then(function(){
    //       return seller.save();
    //     });
    //     this.transitionTo('info', params.seller);
    //   }
  }
});
