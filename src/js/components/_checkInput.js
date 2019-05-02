const control = $('input, textarea');
const filled = 'is-filled';
const checkInputValue = (that) => {
  const value = that.val();
  const parent = that.parent('.js-form-control');
  if (value) {
    parent.addClass(filled);
  } else {
    parent.removeClass(filled);
  }
};
control
  .each(function() {
    const that = $(this);
    checkInputValue(that);
  })
  .on('focus', function() {
    const that = $(this);
    const value = that.val();
    const parent = that.parent('.js-form-control');
    parent.addClass(filled);
  })
  .on('blur', function() {
    const that = $(this);
    setTimeout(() => {
      checkInputValue(that);
    }, 100);
  });
