import { OPEN, BODY } from './../constants';

const control = $('.js-screenshots-control');
const popup = $('.js-screenshots-parent');
const slider = $('.js-screenshots-slider');
let slideNumber;
BODY.on('click', '.js-screenshots-control', function() {
  popup.addClass(OPEN);
  slideNumber = $(this).index() > (control.length - 1) ? 0 : $(this).index();
  console.log(slideNumber);
  slider.slick('slickGoTo', slideNumber);
});
slider.on('click', () => {
  popup.removeClass(OPEN);
});
