document.addEventListener('DOMContentLoaded', function () {
  initGallery();
});

function initGallery() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');

      items.forEach(function (item) {
        var category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.hidden = false;
        } else {
          item.hidden = true;
        }
      });
    });
  });

  var lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  var lightboxImg = lightbox.querySelector('.lightbox img');
  var lightboxCaption = lightbox.querySelector('.lightbox figcaption');
  var lightboxClose = lightbox.querySelector('.lightbox-close');

  items.forEach(function (item) {
    var img = item.querySelector('img');
    if (!img) return;

    function openLightbox() {
      if (lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = img.getAttribute('alt') || '';
      }
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    }

    item.addEventListener('click', openLightbox);
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox();
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}