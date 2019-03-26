import EasyGoogleMaps from './_easymap';
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
              zoom: 14,
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
            template: '#infobox'
          },
          markers: {
            items: data
          }
        };
        let map = new EasyGoogleMaps(mapOptions);
        map.init();
        map.onload(function() {
          const togglers = $('.js-map-category');

          if (!togglers.lenght) return;

          togglers.each((i, el) => {
            const toggler = $(el);
            setTimeout(() => updateMarkers(toggler), 10);
            toggler.on('change', e => updateMarkers($(e.target)));
          });

          function updateMarkers(el) {
            const toggler = $(el);
            const category = $(toggler).data('category');
            const checkState = toggler.is(':checked');
            checkState
              ? map.showCategory(category)
              : map.hideCategory(category);
          }

          // setTimeout(
          //   () =>
          //     map._markers.forEach(marker => {
          //       marker.addListener('click', function(e) {
          //         console.log(marker.iconStyles.scaledSize.height);
          //         marker.iconStyles.scaledSize.height = 40;
          //       });
          //     }),
          //   100
          // );

          // function toggleBounce() {
          //   marker.setAnimation(google.maps.Animation.BOUNCE);
          // }
          // $(shop).each((index, el) => {
          //   const shop = $(el);
          //   const data = $(shop).data();
          //   const myLatlng = { lat: data.lat, lng: data.lng };
          //   const id = data.id;
          //   const gMap = map.realmap;
          //   var newCenter = new google.maps.LatLng(myLatlng);

          //   $(shop).on('click', function(e) {
          //     e.preventDefault();
          //     if ($(e.target).hasClass('js-photo-gallery-trigger')) return;
          //     // === SHOPS-LIST ===
          //     toggleShopsOnClick($(this));
          //     // === MAP ===
          //     for (let k = 0; k < map._markers.length; k++) {
          //       map._markers[k].icon.url = 'img/marker.svg';
          //       if (map._markers[k].id === `${id}`) {
          //         map._markers[k].icon.url = 'img/active-marker.svg';
          //       }
          //     }
          //     gMap.panTo(newCenter);
          //     setTimeout(() => {
          //       gMap.setCenter(newCenter);
          //     }, 500);
          //   });
          // });
        });
      }
    });
  });
}
