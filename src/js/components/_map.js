import EasyGoogleMaps from './_easymap';
// import PerfectScrollbar from 'perfect-scrollbar';
import InitScroll from './_map-select-scrollbar';
import { BODY } from './../constants';
import { LOAD_DATA, buildIcon } from './../utils';

let map = $('.js-map');
if (map.length) {
  $(map).each((i, container) => {
    let path = $(container).data('json');
    LOAD_DATA({
      path: path,
      callback: data => {
        let mapOptions = {
          map: {
            APIKEY: '&amp;',
            container: container,
            options: {
              center: {
                lat: $(container).data('center-lat'),
                lng: $(container).data('center-lng')
              },
              zoom: 12,
              zoomControl: false,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: false,
              styles: [
                {
                  featureType: 'poi',
                  elementType: 'all',
                  stylers: [
                    {
                      hue: '#000000'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: -100
                    },
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi',
                  elementType: 'all',
                  stylers: [
                    {
                      hue: '#000000'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: -100
                    },
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'administrative',
                  elementType: 'all',
                  stylers: [
                    {
                      hue: '#000000'
                    },
                    {
                      saturation: 0
                    },
                    {
                      lightness: -100
                    },
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road',
                  elementType: 'labels',
                  stylers: [
                    {
                      hue: '#ffffff'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: 100
                    },
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'water',
                  elementType: 'labels',
                  stylers: [
                    {
                      hue: '#000000'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: -100
                    },
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road.local',
                  elementType: 'all',
                  stylers: [
                    {
                      hue: '#ffffff'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: 100
                    },
                    {
                      visibility: 'on'
                    }
                  ]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [
                    {
                      hue: '#ffffff'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: 100
                    },
                    {
                      visibility: 'on'
                    }
                  ]
                },
                {
                  featureType: 'transit',
                  elementType: 'labels',
                  stylers: [
                    {
                      hue: '#000000'
                    },
                    {
                      saturation: 0
                    },
                    {
                      lightness: -100
                    },
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'landscape',
                  elementType: 'labels',
                  stylers: [
                    {
                      hue: '#000000'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: -100
                    },
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [
                    {
                      hue: '#bbbbbb'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: 26
                    },
                    {
                      visibility: 'on'
                    }
                  ]
                },
                {
                  featureType: 'landscape',
                  elementType: 'geometry',
                  stylers: [
                    {
                      hue: '#dddddd'
                    },
                    {
                      saturation: -100
                    },
                    {
                      lightness: -3
                    },
                    {
                      visibility: 'on'
                    }
                  ]
                }
              ]
            }
          },
          infobox: {
            template: '#infobox',
            onlyOneBox: true
          },
          markers: {
            items: data
          }
        };
        let map = new EasyGoogleMaps(mapOptions);
        map.init();

        map.onload(function() {

          // CATEGORIES MARKERS
          const togglers = $('.js-map-category');
          if (togglers.length) {
            togglers.each((i, el) => {
              const toggler = $(el);
              setTimeout(() => updateMarkers(toggler), 10);
              toggler.on('change', e => updateMarkers($(e.target)));
            });
          }

          function updateMarkers(el) {
            const toggler = $(el);
            const category = $(toggler).data('category');
            const checkState = toggler.is(':checked');
            checkState
              ? map.showCategory(category)
              : map.hideCategory(category);
          }

          // MAP SELECT
          const mapSelect = $('.js-map-select-wrapper');
          if (mapSelect.length) {
            setTimeout(() => {
              map.populateSelect(mapSelect);

              // Init PerfectScrollBar
              InitScroll('.js-map-select-scrollbar');

              const selects = $('.js-map-select');

              selects.on('mouseover', e => {
                // FIND ID
                const target = $(e.target);
                const id = target.data('mapId');
                // SET ACTIVE ICON
                map.activeMarkerOnHover(id);
                // CHANGE MAP POSITION
                const newCoordinates = map.updateCenterCoordinates(id);
                const gMap = map.realmap;
                var newCenter = new google.maps.LatLng(newCoordinates);
                gMap.panTo(newCenter);
              });

              selects.on('mouseleave', () => map.normalMarkers());
            }, 10);
          }
        });
      }
    });
  });
}
