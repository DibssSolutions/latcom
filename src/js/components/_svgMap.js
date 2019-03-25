import mapael from 'jquery-mapael';
import '../../../node_modules/jquery-mapael/js/maps/world_countries.js';

$('.js-svg-map').mapael({
  map : {
    name : 'world_countries',
    defaultArea: {
      attrs: {
        fill: '#f2f2f2',
        stroke: '#bababa',
        'stroke-width': 0.2,
        'stroke-linejoin': 'round'
      },
      attrsHover: {
        fill: '#1c7efb'
      }
    },
    zoom: {
      enabled: true,
      maxLevel: 17,
      init: {
        latitude: -30.717079,
        longitude: -46.00116,
        level: 10
      }
    }
  }
});
