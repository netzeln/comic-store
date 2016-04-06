import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveSeller(){
      var params = {
        name: this.get('name'),
        city: this.get('city')
      };
      this.sendAction('saveSeller', params)
    }
  }
});
