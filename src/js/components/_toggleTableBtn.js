$('.js-table-sort-btn').on('click', e => {
  $(e.target)
    .closest('.js-table-sort-btn')
    .toggleClass('is-ACS');
});
