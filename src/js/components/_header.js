import { BODY } from '../constants';

const header = $('.js-header');
const searchBtn = $('.js-search-btn');
const menuBtn = $('.js-menu-btn');
const openMenu = 'is-open-menu';
const openSearch = 'is-open-search';

searchBtn.on('click', () => {
  (!header.hasClass(openSearch)) ? header.addClass(openSearch) : header.removeClass(openSearch);
});
BODY.on('click', e => {
  if ($(e.target).closest('.js-search').length || $(e.target).closest('.js-search-btn').length ) return;
  header.removeClass(openSearch);
});

menuBtn.on('click', () => {
  (!header.hasClass(openMenu)) ? header.addClass(openMenu) : header.removeClass(openMenu);
});
BODY.on('click', e => {
  if ($(e.target).closest('.js-account').length || $(e.target).closest('.js-menu-btn').length ) return;
  header.removeClass(openMenu);
});


