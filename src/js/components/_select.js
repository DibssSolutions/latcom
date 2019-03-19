import selectpicker from 'bootstrap-select';
import { DOC, BODY } from '../constants';

DOC.ready(() => {
  const select = $('.js-select');
  select.selectpicker();
  BODY.find('.js-select .btn').removeClass('btn');
});
