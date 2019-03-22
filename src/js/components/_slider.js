import slick from 'slick-carousel';
import EasyGoogleMaps from './_easymap';
// const EasyGoogleMaps = require('./_easymap');

import { BODY } from './../constants';
import { LOAD_DATA, buildIcon } from './../utils';
let modalSlider;
let slideIndex;
BODY.on('click', '.js-gallery-trigger', function() {
  const id = $(this).data('modal-control');
  const slidesWrapper = $(`[data-slider-wrapper=${id}]`);
  const sliderParent = $(`[data-modal=${id}]`);
  modalSlider = $('.js-modal-slider', sliderParent);
  const slides = slidesWrapper.html();
  const slideCount = $('.js-slide', slidesWrapper).length;
  const prevBtn = $('.js-modal-slider-prev', sliderParent);
  const nextBtn = $('.js-modal-slider-next', sliderParent);
  modalSlider.html(slides);
  slideIndex = $(this).index() > slideCount ? 0 : $(this).index();
  modalSlider.on('init', () => {
    let mapNode = modalSlider.find('.js-map-modal');
    if (mapNode.length) {
      $(mapNode).each((i, container) => {
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
                      'featureType': 'poi',
                      'elementType': 'all',
                      'stylers': [
                        {
                          'hue': '#000000'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': -100
                        },
                        {
                          'visibility': 'off'
                        }
                      ]
                    },
                    {
                      'featureType': 'poi',
                      'elementType': 'all',
                      'stylers': [
                        {
                          'hue': '#000000'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': -100
                        },
                        {
                          'visibility': 'off'
                        }
                      ]
                    },
                    {
                      'featureType': 'administrative',
                      'elementType': 'all',
                      'stylers': [
                        {
                          'hue': '#000000'
                        },
                        {
                          'saturation': 0
                        },
                        {
                          'lightness': -100
                        },
                        {
                          'visibility': 'off'
                        }
                      ]
                    },
                    {
                      'featureType': 'road',
                      'elementType': 'labels',
                      'stylers': [
                        {
                          'hue': '#ffffff'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': 100
                        },
                        {
                          'visibility': 'off'
                        }
                      ]
                    },
                    {
                      'featureType': 'water',
                      'elementType': 'labels',
                      'stylers': [
                        {
                          'hue': '#000000'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': -100
                        },
                        {
                          'visibility': 'off'
                        }
                      ]
                    },
                    {
                      'featureType': 'road.local',
                      'elementType': 'all',
                      'stylers': [
                        {
                          'hue': '#ffffff'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': 100
                        },
                        {
                          'visibility': 'on'
                        }
                      ]
                    },
                    {
                      'featureType': 'water',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'hue': '#ffffff'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': 100
                        },
                        {
                          'visibility': 'on'
                        }
                      ]
                    },
                    {
                      'featureType': 'transit',
                      'elementType': 'labels',
                      'stylers': [
                        {
                          'hue': '#000000'
                        },
                        {
                          'saturation': 0
                        },
                        {
                          'lightness': -100
                        },
                        {
                          'visibility': 'off'
                        }
                      ]
                    },
                    {
                      'featureType': 'landscape',
                      'elementType': 'labels',
                      'stylers': [
                        {
                          'hue': '#000000'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': -100
                        },
                        {
                          'visibility': 'off'
                        }
                      ]
                    },
                    {
                      'featureType': 'road',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'hue': '#bbbbbb'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': 26
                        },
                        {
                          'visibility': 'on'
                        }
                      ]
                    },
                    {
                      'featureType': 'landscape',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'hue': '#dddddd'
                        },
                        {
                          'saturation': -100
                        },
                        {
                          'lightness': -3
                        },
                        {
                          'visibility': 'on'
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
          }
        });
      });
    }
  });
  modalSlider.slick({
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: false,
    initialSlide: slideIndex,
    prevArrow: prevBtn,
    nextArrow: nextBtn,
    adaptiveHeight: true
  });
});
const closeModalButton = $('[data-modal-close]');
closeModalButton.on('click', e => {
  
  setTimeout(() => {
    modalSlider.slick('unslick');
  },200);
});

$('[data-modal]').on('click', e => {
  if (modalSlider.hasClass('slick-initialized')) {
    if ($(e.target).closest('[data-modal-container]').length || $(e.target).closest('.js-gallery-trigger').length) return;
    setTimeout(() => {
      modalSlider.slick('unslick');
    },200);
  }
});
