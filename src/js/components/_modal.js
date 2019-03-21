import {OPEN, ACTIVE, BODY, LOADED, OVERFLOW_HIDDEN} from './../constants';

const modal = () => {

  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');
  controls.each((i, control) => {
    control = $(control);
    const modal = modals.filter(`[data-modal="${control.data('modal-control')}"]`);
    if ( modal.hasClass(LOADED) ) return;

    control.on('click', e => {
      e.preventDefault();
      // BODY.addClass(OVERFLOW_HIDDEN);
      if (!control.hasClass(ACTIVE)) {
        modals.removeClass(OPEN);
        modal.addClass(OPEN);
        controls.removeClass(ACTIVE);
        control.addClass(ACTIVE);
      }
      else {
        modal.removeClass(OPEN);
        control.removeClass(ACTIVE);
      }
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const inner = modal.find('[data-modal-container]');
    const close = modal.find('[data-modal-close]');

    const hide = () => {
      modal.removeClass(OPEN);
      // BODY.removeClass(OVERFLOW_HIDDEN);
      controls.removeClass(ACTIVE);
    };

    BODY.on('click', e => {
      if ($(e.target).closest(inner).length || $(e.target).closest(controls).length ) return;
      hide();
    });

    close.on('click', e => {
      e.preventDefault();
      hide();
    });
    if ( modal.hasClass(LOADED) ) return;
    modal.addClass(LOADED);
  });
};
window.modal = modal;

modal();
// ----------------------  HTML EXEMPLE ---------------------
// <a href="#" data-modal-control="modalname"></a> ---- trigger
// <div class="modal" data-modal="modalname"> ------ modal window
//     <div class="modal__container" data-modal-container>
//       <div class="modal__inner">
//         <button class="modal__close" data-modal-close>
//           {{mixins.icon('close')}}
//         </button>
        
//       </div>
//     </div>
//   </div>
