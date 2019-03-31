import mapael from 'jquery-mapael';
import '../../../node_modules/jquery-mapael/js/maps/world_countries.js';
import { LOAD_DATA, mediaWidth } from '../utils.js';
import { WIN } from '../constants';

const maps = $('.js-svg-map');
const initSvgMaps = () => {
  maps.each((i,el) => {
    const thisPath = $(el).data('json');
    LOAD_DATA({
      path: thisPath,
      callback: data => {
        const ps = $(el).parents('.js-scroll-bar');
        $(el).mapael({
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
              // enabled: true,
              maxLevel: 35,
              init: {
                latitude: -30.717079,
                longitude: -53.00116,
                level: 13
              }
            },
            afterInit: function($self, paper, areas, plots, options) {
              const container = $(el);
              const map = container.find('.map');
              let timeout;
              $('[data-id="UY"]').trigger('mouseover');
              $('path', ).on('mouseout', () => {
                $('[data-id="UY"]').trigger('mouseout');
              });

              const setZoom = () => {
                if (mediaWidth(767) && options.map.zoom.init.level !== 30) {
                  container.trigger('zoom', { level: 30 });
                }
                else {
                  container.trigger('zoom', { level: 13 });
                }
              };
              setZoom();
              map.unbind('resizeEnd');

              WIN.on('resize', function() {
                clearTimeout(timeout);

                timeout = setTimeout( () => {
                  var mapW = container.width();
                  var mapH = container.height();
                        
                  var winRatio = mapW / mapH;
                  var mapRatio = mapW / mapH;
                            
                  (winRatio > mapRatio)
                    ? paper.setSize((mapW * mapH) / mapH, mapH)
                    : paper.setSize(mapW, (mapH * mapW) / mapW);

                  setZoom();

                }, 200);
              }).trigger('resize');
            }
          },
          areas: data[0]
        });
      }
    });
  });
};

setTimeout(initSvgMaps, 100);
