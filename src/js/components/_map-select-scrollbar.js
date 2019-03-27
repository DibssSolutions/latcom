import PerfectScrollbar from 'perfect-scrollbar';

export default (selector) => {
  new PerfectScrollbar(selector, {
    useBothWheelAxes: false,
    maxScrollbarLength: 60,
    wheelPropagation: false
  });
};
