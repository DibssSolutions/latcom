import { BODY, OPEN } from '../constants';

const mobBtn = $('.js-mob-map-select-toggler');
const mapSelectWrapper = $('.js-mob-map-select-wrapper');

mobBtn.on('click', e => {
  e.preventDefault();
  mapSelectWrapper.toggleClass(OPEN);
});

BODY.on('click', e => {
  if (
    $(e.target).closest(mobBtn).length ||
    $(e.target).closest(mapSelectWrapper).length
  )
    return;
  mapSelectWrapper.removeClass(OPEN);
});
