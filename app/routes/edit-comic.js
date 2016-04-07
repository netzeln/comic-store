import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('comic', params.comic_id)
  },

  actions :{
    updateComic(comic, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          comic.set(key,params[key]);
        }
      });
      comic.save();
      this.transitionTo('index');
    }
  }
});
