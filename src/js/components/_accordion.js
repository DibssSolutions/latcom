import { OPEN, BODY } from '../constants';
const accordeons = $('.js-accordion');
const accordeonsWrap = $('.js-accordion-wrap');

BODY.on('click', e => {
  const parent = $(e.target).closest('.js-accordion-trigger')[0];
  if (!parent) return;

  const that = $(e.target).closest('.js-accordion');
  const thatAccordeonWrap = that.find('.js-accordion-wrap');

  e.preventDefault();
  if (!that.hasClass(OPEN)) {
    accordeons.removeClass(OPEN);
    accordeonsWrap.slideUp(350);
    that.addClass(OPEN);
    thatAccordeonWrap.slideDown(350);
  } else {
    that.removeClass(OPEN);
    thatAccordeonWrap.slideUp(350);
  }
});

accordeons.each(function() {
  const _this = $(this);
  const _accordeonWrap = _this.find('.js-accordion-wrap');
  if (_this.hasClass(OPEN)) {
    _accordeonWrap.show();
  }
});
