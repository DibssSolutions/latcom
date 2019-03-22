import PerfectScrollbar from 'perfect-scrollbar';
import { DOC } from '../constants';


const perf = document.querySelectorAll('.js-perf');
if (perf) {
  for (var i = 0; i <= perf.length - 1; i++) {
    perf[i].perfectScrollbar = new PerfectScrollbar(perf[i], {
      useBothWheelAxes: false,
      maxScrollbarLength: 60
    });
  }
}
