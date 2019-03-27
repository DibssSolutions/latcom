import { OPEN } from '../constants';

const btn = $('.tabs-mob-btn');

btn.on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass(OPEN);
});
