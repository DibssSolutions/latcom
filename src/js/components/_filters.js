import { BODY, OPEN } from '../constants';

const filtersBtn = $('.js-filters-btn');
const filtersWrapper = $('.js-filters-wrapper');
const overlay = $('.js-filters-overlay');
const filters = $('.js-filters');

filtersBtn.on('click', e => {
  filtersWrapper.toggleClass('is-open');
});

BODY.on('click', e => {
  if (
    $(e.target).closest(filters).length ||
    $(e.target).closest(filtersBtn).length
  )
    return;
  filtersWrapper.removeClass(OPEN);
});
