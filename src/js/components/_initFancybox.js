import '@fancyapps/fancybox';

$('[data-fancybox="gallery"]').fancybox({
  // Options will go here
  buttons: [],
  infobar: false,
  slideClass: 'fancy-slide',
  zoom: false,
  btnTpl: {
  // Arrows
    arrowLeft:
  '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
  '<div><svg xmlns="http://www.w3.org/2000/svg" width="21.372" height="40.417" viewBox="0 0 21.372 40.417"><path d="M2.37.4A1.279,1.279,0,0,0,.546.366,1.317,1.317,0,0,0,.513,2.213L18.252,20.149.513,38.085a1.3,1.3,0,0,0-.138,1.953A1.271,1.271,0,0,0,2.307,39.9l18.7-18.844a1.3,1.3,0,0,0,0-1.811Z" transform="translate(21.372 40.417) rotate(-180)" fill="#fff"/></svg></div>' +
  '</button>',
    arrowRight:
    '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
    '<div><svg xmlns="http://www.w3.org/2000/svg" width="21.373" height="40.417" viewBox="0 0 21.373 40.417"><path d="M2.37.4A1.279,1.279,0,0,0,.546.366,1.317,1.317,0,0,0,.513,2.213L18.252,20.149.513,38.085a1.3,1.3,0,0,0-.138,1.953A1.271,1.271,0,0,0,2.307,39.9l18.7-18.844a1.3,1.3,0,0,0,0-1.811l-8.27-8.362Z" fill="#fff"/></svg></div>' +
    '</button>'
  },
  afterShow: function(instance, current) {
    let name = $(current.opts.$orig[0]).data('name');
    let location = $(current.opts.$orig[0]).data('location');
    let large = $(current.opts.$orig[0]).data('large-src');
    let download = $(current.opts.$orig[0]).data('download');
    let downloadAlbum = $(current.opts.$orig[0]).data('download-album');
    current.$content.append(`
      
      <div class="fancy-bottom">
        <div class="fancy-bottom__left">
          <div class="fancy-bottom__name">${name}</div>
          <div class="fancy-bottom__location">${location}</div>
          <a href="${large || '#'}" class="fancy-bottom__link">Gran formato</a>
        </div>
        <div class="fancy-bottom__right">
          <a href="${download || '#'}" class="fancy-bottom__link fancy-bottom__ref">Descargar foto</a>
          <a href="${downloadAlbum || '#'}" class="fancy-bottom__link fancy-bottom__ref">Descargar todo el álbum</a>
        </div>
      </div>
      <div class="fancy-close" data-fancybox-close>
        <svg id="Group_3" data-name="Group 3" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
          <path id="Fill_1" data-name="Fill 1" d="M0,1.351,1.351,0,27,25.649,25.649,27Z" fill="#fff"/>
          <path id="Fill_2" data-name="Fill 2" d="M0,25.649,25.649,0,27,1.351,1.351,27Z" fill="#fff"/>
        </svg>
      </div>
    `);
  }
});
