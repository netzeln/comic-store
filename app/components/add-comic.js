import Ember from 'ember';

export default Ember.Component.extend({
  addNewComic: false,


  actions: {
    newComicForm(){
      this.set('addNewComic', true);
    },
    saveComic(){
      var params = {
        series: this.get('series'),
        issueNo: this.get('issueNo'),
        writer: this.get('writer'),
        artist: this.get('artist'),
        year: this.get('year'),
        publisher: this.get('publisher'),
        category: this.get('category'),
        description: this.get('description'),
        image: this.get('image'),
        price: this.get('price'),
        condition: this.get('condition'),
        seller: this.get('seller')
      };
      this.set('addNewComic', false);
      this.sendAction('saveComic', params);
    }
  }
});
