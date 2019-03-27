import slick from 'slick-carousel';
import EasyGoogleMaps from './_easymap';

import { BODY, WIN_WIDTH, widthSM, WIN } from './../constants';
import { LOAD_DATA, buildIcon, mediaWidth } from './../utils';
let modalSlider;
let slideIndex;
BODY.on('click', '.js-gallery-trigger', function() {
  const id = $(this).data('modal-control');
  const slideId = $(this).data('wrapper');
  const slidesWrapper = $(`[data-slider-wrapper=${slideId}]`);
  const sliderParent = $(`[data-modal=${id}]`);
  modalSlider = $('.js-modal-slider', sliderParent);
  const slides = slidesWrapper.html();
  const slideCount = $('.js-slide', slidesWrapper).length;
  const prevBtn = $('.js-modal-slider-prev', sliderParent);
  const nextBtn = $('.js-modal-slider-next', sliderParent);
  modalSlider.html(slides);
  slideIndex = $(this).index() > (slideCount - 1) ? 0 : $(this).index();
  modalSlider.on('init', () => {
    let maps = modalSlider.find('.js-map-modal');
    if (maps.length) {
      $(maps).each((i, container) => {
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
  }, 200);
});

$('[data-modal]').on('click', e => {
  if (modalSlider.hasClass('slick-initialized')) {
    if ($(e.target).closest('[data-modal-container]').length || $(e.target).closest('.js-gallery-trigger').length) return;
    setTimeout(() => {
      modalSlider.slick('unslick');
    },200);
  }
});


const screenshotsSlider = $('.js-screenshots-slider');
const screenshotsSliderrParent = screenshotsSlider.parents('.js-screenshots-parent');
const prevBtn = $('.js-screenshots-prev', screenshotsSliderrParent);
const nextBtn = $('.js-screenshots-next', screenshotsSliderrParent);
const screenshotsSliderInit = () => {
  if (mediaWidth(767) && !screenshotsSlider.hasClass('slick-initialized')) {
    screenshotsSlider.slick({
      dots: false,
      infinite: true,
      speed: 800,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slideToScroll: 1,
      autoplay: false,
      prevArrow: prevBtn,
      nextArrow: nextBtn,
      adaptiveHeight: true
    });
  } else {
    if (!mediaWidth(767) && screenshotsSlider.hasClass('slick-initialized')) screenshotsSlider.slick('unslick');
  }
};

const controlText = $('.js-screenshots-control-text');
const screenshotsFooter = screenshotsSliderrParent.find('.js-screenshots-text');
screenshotsSlider.on('afterChange', function(event, slick, currentSlide) {
  console.log(currentSlide);
  const text = $(controlText[currentSlide]).html();
  screenshotsFooter.html(text);
});

let timeout;
WIN.on('resize', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {screenshotsSliderInit();},100);
});

const videoSlider = $('.js-video-slider');
videoSlider.slick({
  dots: false,
  infinite: true,
  speed: 800,
  cssEase: 'linear',
  slidesToShow: 1,
  slideToScroll: 1,
  autoplay: false,
  prevArrow: '<button class="video-block__prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="21.373" height="40.417" viewBox="0 0 21.373 40.417"><path d="M2.37.4A1.279,1.279,0,0,0,.546.366,1.317,1.317,0,0,0,.513,2.213L18.252,20.149.513,38.085a1.3,1.3,0,0,0-.138,1.953A1.271,1.271,0,0,0,2.307,39.9l18.7-18.844a1.3,1.3,0,0,0,0-1.811Z" transform="translate(21.373 40.417) rotate(-180)" fill="#fff"/></svg></button>',
  nextArrow: '<button class="video-block__next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="21.373" height="40.417" viewBox="0 0 21.373 40.417"><path d="M2.37.4A1.279,1.279,0,0,0,.546.366,1.317,1.317,0,0,0,.513,2.213L18.252,20.149.513,38.085a1.3,1.3,0,0,0-.138,1.953A1.271,1.271,0,0,0,2.307,39.9l18.7-18.844a1.3,1.3,0,0,0,0-1.811Z" fill="#fff"/></svg></button>',
  // adaptiveHeight: true
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       centerMode: true,
  //       // centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});
