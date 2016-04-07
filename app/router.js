import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('comic', {path: '/comic/:comic_id'});
  this.route('cart');
  this.route('sellers', function(){
    this.route('info', { path: '/:seller_id' });
  });
  this.route('list-comics');
});

export default Router;
