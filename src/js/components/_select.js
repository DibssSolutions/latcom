import selectpicker from 'bootstrap-select';
import { DOC, BODY, ACTIVE } from '../constants';
import PerfectScrollbar from 'perfect-scrollbar';

DOC.ready(() => {
  const select = $('.js-select');
  select.selectpicker({ liveSearchPlaceholder: 'search' });
  BODY.find('.js-select .btn').removeClass('btn');

  // const inputs = $('.bs-searchbox input');
  // inputs.each((i, el) => {
  //   $(el).on('input', e => hideLine(e));
  // });

  // function hideLine(e) {
  //   const el = $(e.target);
  //   const parent = el.closest('.bs-searchbox');
  //   parent.addClass(ACTIVE);
  // }
});
