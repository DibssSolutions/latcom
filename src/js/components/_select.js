import selectpicker from 'bootstrap-select';
import { DOC, BODY } from '../constants';
import PerfectScrollbar from 'perfect-scrollbar';

DOC.ready(() => {
  const select = $('.js-select');
  select.selectpicker({ liveSearchPlaceholder: 'SEARCH' });
  BODY.find('.js-select .btn').removeClass('btn');
});
