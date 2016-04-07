import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
    seller: this.store.findRecord('seller', params.seller_id),
    // comics: this.store.findRecord('comic', params.seller_id)
  });

  },
  actions: {
    saveComic(params){
      var newComic = this.store.createRecord('comic', params);
      var seller = params.seller;
      console.log(params);
      seller.get('comics').addObject(newComic);
      newComic.save().then(function(){
        return seller.save();
      });
      this.transitionTo('info', params.seller);
    },
    deleteComic(){
      var seller = comic.get('seller');
      comic.destroyRecord().then(function(){
        seller.save();
      });
      this.transitionTo('sellers');
    }
  }
});
