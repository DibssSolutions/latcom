import selectpicker from 'bootstrap-select';
import { DOC, BODY, ACTIVE } from '../constants';
import PerfectScrollbar from 'perfect-scrollbar';

DOC.ready(() => {
  const select = $('.js-select');
  select
    .selectpicker({
      liveSearchPlaceholder: 'search'
      // dropupAuto: false
    })
    .on('shown.bs.select', function(
      e,
      clickedIndex,
      isSelected,
      previousValue
    ) {
      const parent = $(this).parents('.js-select');
      const perf = parent.find('.dropdown-menu>.inner.show');
      if (perf.hasClass('ps')) return;
      new PerfectScrollbar(perf[0], {
        useBothWheelAxes: false,
        maxScrollbarLength: 60
      });
    });
  BODY.find('.js-select .btn').removeClass('btn');

  $('.js-select .dropdown-menu').on('click', e => {
    const parent = $(e.target).closest('.ps__rail-y');
    if (parent[0] !== undefined) {
      e.stopPropagation();
    }
  });

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