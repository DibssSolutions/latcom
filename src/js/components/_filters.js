import { BODY, OPEN } from '../constants';

const openBtn = $('.js-filters-open');
const closeBtn = $('.js-filters-close');
const filtersWrapper = $('.js-filters-wrapper');
const filters = $('.js-filters');

openBtn.on('click', e => {
  filtersWrapper.addClass('is-open');
});

closeBtn.on('click', e => {
  filtersWrapper.removeClass(OPEN);
});

BODY.on('click', e => {

  if (
    $(e.target).closest(filters).length ||
    $(e.target).closest(closeBtn).length ||
    $(e.target).closest(openBtn).length
  )
    return;
  filtersWrapper.removeClass(OPEN);
});
