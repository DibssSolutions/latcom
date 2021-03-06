import { OPEN, BODY } from './../constants';

const control = $('.js-screenshots-control');
const popup = $('.js-screenshots-parent');
const close = $('.js-screenshots-close', popup);
const slider = $('.js-screenshots-slider');
let slideNumber;
BODY.on('click', '.js-screenshots-control', function() {
  popup.addClass(OPEN);
  slideNumber = $(this).index() > (control.length - 1) ? 0 : $(this).index();
  slider.slick('slickGoTo', slideNumber);
});
slider.on('click', () => {
  popup.removeClass(OPEN);
});
close.on('click', () => {
  popup.removeClass(OPEN);
});
