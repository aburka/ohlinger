import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        src: 'images/sparrow.jpg',
        w: 400,
        h: 400,
        caption: "what a beautiful sparrow",
        tags: ["put a bird on it", "color"]
      },
      {
        id: 2,
        src: 'images/star_sparrow.jpg',
        w: 400,
        h: 400,
        caption: "sparrow with stars near its butt",
        tags: ["put a bird on it", "color", "stars"]
      },
      {
        id: 3,
        src: 'images/fork.jpg',
        w: 400,
        h: 400,
        caption: "fork!",
        tags: ["black & white", "dotwork"]
      }
    ];
  }
});
