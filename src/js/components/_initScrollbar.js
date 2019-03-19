import PerfectScrollbar from 'perfect-scrollbar';
import { DOC } from '../constants';

DOC.ready(() => {
  const containers = document.querySelectorAll('.dropdown-menu');
  if (!containers) {
    return;
  } else {
    for (var i = 0; i <= containers.length - 1; i++) {
      containers[i].perfectScrollbar = new PerfectScrollbar(containers[i], {
        minScrollbarLength: 40,
        useBothWheelAxes: true
      });
      console.log('INIT PERF SCROLL');
    }
  }
  // const shops = document.querySelector('.js-shops-scroll');
  // if (!shops) {
  //   return false;
  // } else {
  //   const shopsPs = new PerfectScrollbar(shops, {
  //     useBothWheelAxes: false
  //   });
  //   $('.js-photo-gallery-trigger').on('click', function() {
  //     setTimeout(() => {
  //       shopsPs.update();
  //     }, 200);
  //   });
  // }
});
