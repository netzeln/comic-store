import DS from 'ember-data';

export default DS.Model.extend({
  title: this.get('title'),
  series: this.get('series'),
  writer: this.get('writer'),
  artist: this.get('artist'),
  description: this.get('description'),
  issueNo: this.get('issueNo'),
  year: this.get('year'),
  publisher: this.get('publisher'),
  price: this.get('price'),
  condition: this.get('condition'),
  category: this.get('category'),
  image: this.get('image')
});
