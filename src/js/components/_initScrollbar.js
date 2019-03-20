import PerfectScrollbar from 'perfect-scrollbar';
import { DOC } from '../constants';

DOC.ready(() => {
  const containers = document.querySelectorAll('.dropdown-menu .inner.show');
  if (!containers) {
    return;
  } else {
    for (var i = 0; i <= containers.length - 1; i++) {
      containers[i].perfectScrollbar = new PerfectScrollbar(containers[i], {
        useBothWheelAxes: false,
        maxScrollbarLength: 60
      });
    }
  }
});
