import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      comics: this.store.findAll('comic'),
      sellers: this.store.findAll('seller')
    });
  }
});
