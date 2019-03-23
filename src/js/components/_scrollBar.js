import PerfectScrollbar from 'perfect-scrollbar';
var ps = new PerfectScrollbar('.js-scroll-bar');

const containers = document.querySelectorAll('.js-scroll-bar');
if (containers) {
  for (var i = 0; i <= containers.length - 1; i++) {
    new PerfectScrollbar(containers[i]);
  }
}

