import PerfectScrollbar from 'perfect-scrollbar';
import { DOC } from '../constants';

DOC.ready(() => {
  // const containers = document.querySelectorAll('.dropdown-menu .inner.show');
  // if (!containers) {
  //   return;
  // } else {
  //   for (var i = 0; i <= containers.length - 1; i++) {
  //     containers[i].perfectScrollbar = new PerfectScrollbar(containers[i], {
  //       useBothWheelAxes: false,
  //       maxScrollbarLength: 60
  //     });
  //   }
  // }

  const perf = document.querySelectorAll('.js-perf');
  if (!perf) {
    return;
  } else {
    for (var i = 0; i <= perf.length - 1; i++) {
      perf[i].perfectScrollbar = new PerfectScrollbar(perf[i], {
        useBothWheelAxes: false,
        maxScrollbarLength: 60
      });
    }
  }
});
