// import { OPEN, BODY } from '../constants';
// const accordeons = $('.js-accordion');
// const accordeonsWrap = $('.js-accordion-wrap');

// BODY.on('click', e => {
//   const parent = $(e.target).closest('.js-accordion-trigger')[0];
//   if (!parent) return;

//   const that = $(e.target).closest('.js-accordion');
//   const thatAccordeonWrap = that.find('.js-accordion-wrap');

//   e.preventDefault();
//   if (!that.hasClass(OPEN)) {
//     accordeons.removeClass(OPEN);
//     accordeonsWrap.slideUp(350);
//     that.addClass(OPEN);
//     thatAccordeonWrap.slideDown(350);
//   } else {
//     that.removeClass(OPEN);
//     thatAccordeonWrap.slideUp(350);
//   }
// });

// accordeons.each(function() {
//   const _this = $(this);
//   const _accordeonWrap = _this.find('.js-accordion-wrap');
//   if (_this.hasClass(OPEN)) {
//     _accordeonWrap.show();
//   }
// });

import { OPEN, WIN, WIN_WIDTH } from '../constants';

class ACCORDION {
  constructor(options) {
    this.$group = $('[data-accordion-group]');
    this.items = $('[data-accordion-item]');
    this.item = '[data-accordion-item]';
    this.trigger = '[data-accordion-trigger]';
    this.container = '[data-accordion-container]';
    this.multiple = 'data-accordion-multiple';
    this.openFlug = 'data-accordion-open';
    this.initFlug = 'accordion-on-init';
    this.init();
  }
  openItems() {
    this.items.each((i, el) => {
      const item = $(el);
      const container = item.find(this.container);

      const openFlug = item[0].hasAttribute(this.openFlug);
      const initWidth = item.data(this.initFlug);
      const openItem = () => {
        item.addClass(OPEN);
        container.show();
      };
      const closeItem = () => {
        item.removeClass(OPEN);
        container.hide();
      };
      const openItemInit = () => {
        const WIN_WIDTH = WIN.width();
        console.log(initWidth);
        if (!openFlug && !initWidth) return;
        if (openFlug && !initWidth) {
          openItem();
        } else if (openFlug && initWidth >= WIN_WIDTH) {
          openItem();
        } else if (!openFlug && initWidth <= WIN_WIDTH) {
          openItem();
        } else if (!openFlug && initWidth >= WIN_WIDTH && initWidth) {
          closeItem();
        }
      };
      openItemInit();

      WIN.on('resize', openItemInit);
    });
  }
  toggle() {
    this.$group.each((i, el) => {
      const group = $(el);
      const items = group.find(this.item);
      const groupContainers = items.find(this.container);
      const that = this;
      const multFlug = group[0].hasAttribute(this.multiple);
      items.on('click', function(e) {
        const item = $(this);
        const thisContainer = item.find(that.container);
        const initWidth = item.data(that.initFlug);
        if ($(e.target).closest(groupContainers).length) return;

        const WIN_WIDTH = WIN.width();

        const toggle = () => {
          if (!item.hasClass(OPEN)) {
            if (!multFlug) {
              groupContainers.slideUp();
              items.removeClass(OPEN);
            }
            thisContainer.slideDown();
            item.addClass(OPEN);
          } else {
            thisContainer.slideUp();
            item.removeClass(OPEN);
          }
        };

        if (!initWidth) {
          toggle();
        } else if (initWidth && initWidth >= WIN_WIDTH) {
          toggle();
        }
      });

      items.each((i, el) => {
        const initWidth = $(el).data(this.initFlug);
        const openFlug = $(el)[0].hasAttribute(this.openFlug);
        WIN.on('resize', () => {
          if (initWidth < WIN.width() && !openFlug) {
            groupContainers.show();
            items.removeClass(OPEN);
          }
        });
      });
    });
  }
  init() {
    this.toggle();
    this.openItems();
  }
}
new ACCORDION();
