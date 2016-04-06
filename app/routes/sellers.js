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
  }
});
